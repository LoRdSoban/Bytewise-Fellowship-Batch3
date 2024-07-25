import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

const AddJobPage = ({addJobSubmit}) => {
    const [job, setJob] = useState({
        type: "Full-Time",
        title: "",
        location: "",
        salary: "Under $50K",
        description: "",
        company: {
            name: "",
            description: "",
            contactEmail: "",
            contactPhone: ""
          }
    });

    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        addJobSubmit(job);

        toast.success("Job added successfully");

        return navigate("/jobs");
    }

  return (
    <JobForm type="add" job={job} setJob={setJob} submitForm={submitForm} />
  );
};

export default AddJobPage;
