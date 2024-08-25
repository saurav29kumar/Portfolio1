import React from "react";
import { useForm } from "react-hook-form"
import { FaAppStoreIos } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";

function Contact(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
            await axios.post("https://getform.io/f/alljxvqa",userInfo)
            toast.success("Your message has been sent")
        } catch (error) {
            toast.error("Somthing went worng!")
        }
      }
    return(
        <>
          <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <h1 className="text-4xl font-bold mb-4">Contact me</h1>
            <span>Please fill out the form below to contact me</span>
            <div className="flex flex-col items-center justify-center mt-5">
                <form onSubmit={handleSubmit(onSubmit)}
                //  action="https://getform.io/f/alljxvqa" 
                //  method="POST" 
                 className="bg-slate-200 w-96 rounded-xl p-4">
                    <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                    <div className="flex flex-col mb-4">
                        <label className="font-semibold">FullName</label>
                        <input {...register("name", { required: true })} name="name" type="text" className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Enter your fullName"/>
                        {errors.name && <span className="text-red-600">Name is required!</span>}
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="font-semibold">Email address</label>
                        <input {...register("email", { required: true })} name="email" type="text" className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Enter your email address"/>
                        {errors.email && <span className="text-red-600">Email is required!</span>}
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="font-semibold">Message</label>
                        <input {...register("message", { required: true })} name="message" type="text" className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Query not more than 100 words"/>
                        {errors.message && <span className="text-red-600">In case no Query write NIL</span>}
                    </div>
                    <button type="submit" className="bg-black text-white font-semibold rounded-xl px-3 py-2 hover:bg-green-700">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact;