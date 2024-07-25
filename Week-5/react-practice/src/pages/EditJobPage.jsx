import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

const EditJobPage = ({updateJobSubmit}) => {
    const [job, setJob] = useState(useLoaderData());
    
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        updateJobSubmit(job);

        toast.success("Job updated successfully");

        return navigate(`/jobs/${job.id}`);
    }


  return (
    <JobForm type="edit" job={job} setJob={setJob} submitForm={submitForm} />
  )
}

export default EditJobPage