import PageHeader from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BookOpen,
  Image,
  Loader2,
  User,
  Mail,
  Phone,
  FormInput,
  GitBranch,
  Locate,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { CLIENT_API, ACTIVE_SERVICE_API } from "@/constants/apiConstants";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { toast } from "sonner";
import MemoizedSelect from "@/components/common/memoized-select";
import { useQueryClient } from "@tanstack/react-query";
import RedStar from "@/components/RedStar";

const Createclient = ({ isEdit, isRelation = false }) => {
  //the m_id is am passing as a param :id
  const { trigger, loading: isSubmitting } = useApiMutation();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const m_id = location.state?.m_id;
  const queryClient = useQueryClient();

  // console.log(m_id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    area: "",
    description: "",
    relation: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  const [serviceOptions, setServiceOptions] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedHideServices, setSelectedHideServices] = useState([]);

  /* ===============================
  FETCH SERVICES
  =============================== */

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await trigger({
          url: ACTIVE_SERVICE_API.list,
          method: "get",
        });

        const services = res?.data || [];

        const mappedServices = services.map((service) => ({
          value: String(service.id),
          label: service.service_name,
        }));

        setServiceOptions(mappedServices);
      } catch (error) {
        toast.error("Failed to load services");
      }
    };

    fetchServices();
  }, []);

  /* ===============================
  VALIDATION INPUT HANDLER
  =============================== */

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;
    let error = "";

    if (name === "name") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
      if (!updatedValue) error = "Name is required";
    }

    if (name === "mobile") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
      if (updatedValue.length !== 10) error = "Mobile must be 10 digits";
    }

    if (name === "whatsapp") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "email") {
      if (value && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) {
        error = "Email must end with @gmail.com";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  /* ===============================
  FETCH client DATA
  =============================== */

  useEffect(() => {
    if (!isEdit || !id) return;

    const fetchclient = async () => {
      try {
        const res = await trigger({
          url: CLIENT_API.byId(id),
          method: "get",
        });

        const data = res?.data;

        setFormData({
          name: data?.name || "",
          email: data?.email || "",
          mobile: data?.mobile || "",
          whatsapp: data?.whatsapp || "",
          area: data?.area || "",
          description: data?.description || "",
          relation: data?.relation || "",
          status: data?.status || "Active",
        });

        if (data?.services) {
          const servicesArray = data.services.split(",");

          const mapped = servicesArray.map((s) => ({
            value: s,
            label:
              serviceOptions.find((opt) => opt.value === s)?.label ||
              `Service ${s}`,
          }));

          setSelectedServices(mapped);
        }

        if (data?.hide_services) {
          const hideArray = data.hide_services.split(",");

          const mappedHide = hideArray.map((s) => ({
            value: s,
            label:
              serviceOptions.find((opt) => opt.value === s)?.label ||
              `Service ${s}`,
          }));

          setSelectedHideServices(mappedHide);
        }
      } catch {
        toast.error("Failed to fetch client details");
      }
    };

    fetchclient();
  }, [id, isEdit, serviceOptions]);

  /* ===============================
  FORM VALIDATION
  =============================== */

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email))
      newErrors.email = "Email must end with @gmail.com";

    if (!formData.mobile) newErrors.mobile = "Mobile number required";
    else if (formData.mobile.length !== 10)
      newErrors.mobile = "Mobile must be 10 digits";

    if (selectedServices.length === 0)
      newErrors.services = "Please select at least one service";

    if (isRelation && !formData.relation)
      newErrors.relation = "Relation is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ===============================
  SUBMIT FORM
  =============================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formDataObj = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    if (isRelation && m_id) {
      formDataObj.append("r_id", m_id);
    }

    formDataObj.append(
      "services",
      selectedServices.map((s) => s.value).join(","),
    );

    formDataObj.append(
      "hide_services",
      selectedHideServices.map((s) => s.value).join(","),
    );

    try {
      const res = await trigger({
        url: isEdit ? CLIENT_API.updateById(id) : client_API.list,
        method: isEdit ? "put" : "post",
        data: formDataObj,
      });

      if (res?.code === 200 || res?.code === 201) {
        queryClient.invalidateQueries({ queryKey: ["client-list"] });

        toast.success(
          res?.msg ||
            (isEdit
              ? "client updated successfully"
              : "client created successfully"),
        );

        navigate(-1);
      } else {
        toast.error(res?.message || "Operation failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const errorBorder = (field) =>
    errors[field] ? "border-red-500 focus-visible:ring-red-500" : "";

  return (
    <div className="max-w-full mx-auto">
      <PageHeader
        icon={Image}
        title={isEdit ? "Edit client" : "Add New client"}
        description="Fill in the details below"
      />

      <Card className="mt-2">
        <CardContent className="p-4">
          <form
            id="create-client-form"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {/* NAME */}
            <div className="space-y-2">
              <Label className="flex">
                <User className="h-3.5 w-5" />
                Name <RedStar />
              </Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errorBorder("name")}
                placeholder="Enter Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <Label className="flex">
                <Mail className="h-3.5 w-5" />
                Email <RedStar />
              </Label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errorBorder("email")}
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* MOBILE */}
            <div className="space-y-2">
              <Label className="flex">
                <Phone className="h-3.5 w-5" />
                Mobile <RedStar />
              </Label>
              <Input
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className={errorBorder("mobile")}
                placeholder="Enter Mobile Number"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            {/* WHATSAPP */}
            <div className="space-y-2">
              <Label className="flex">
                <Phone className="h-3.5 w-5" />
                Whatsapp
              </Label>
              <Input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="Enter Whatsapp Number"
              />
            </div>

            {/* SERVICES */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-4" />
                Services <RedStar />
              </Label>

              <MemoizedSelect
                isMulti
                options={serviceOptions}
                value={selectedServices}
                onChange={setSelectedServices}
              />

              {errors.services && (
                <p className="text-red-500 text-sm">{errors.services}</p>
              )}
            </div>

            {/* HIDE SERVICES */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-4" />
                Hide Services
              </Label>

              <MemoizedSelect
                isMulti
                options={serviceOptions}
                value={selectedHideServices}
                onChange={setSelectedHideServices}
              />
            </div>

            {/* RELATION */}
            {isRelation && (
              <div className="space-y-2">
                <Label className="flex">
                  <GitBranch className="h-3.5 w-5" />
                  Relation <RedStar />
                </Label>
                <Input
                  name="relation"
                  value={formData.relation}
                  onChange={handleInputChange}
                  className={errorBorder("relation")}
                  placeholder="Enter Relation"
                />
                {errors.relation && (
                  <p className="text-red-500 text-sm">{errors.relation}</p>
                )}
              </div>
            )}

            {/* AREA */}
            <div className="space-y-2">
              <Label className="flex">
                <Locate className="h-3.5 w-5" />
                Area
              </Label>
              <Input
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                placeholder="Enter Area"
              />
            </div>

            {isEdit && (
              <div className="space-y-2">
                <Label className="flex">
                  <GitBranch className="h-3.5 w-5" />
                  Status
                </Label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full border rounded-md h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            )}

            {/* DESCRIPTION */}
            <div className="space-y-2 md:col-span-2">
              <Label className="flex">
                <FormInput className="h-3.5 w-5" />
                Description
              </Label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Type Your Description Here..."
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="md:col-span-2 flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => navigate(-1)}>
                Back
              </Button>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEdit ? "Updating..." : "Creating..."}
                  </>
                ) : isEdit ? (
                  "Update client"
                ) : (
                  "Create client"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Createclient;
