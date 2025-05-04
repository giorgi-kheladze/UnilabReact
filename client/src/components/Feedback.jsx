import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Feedback = () => {
  const api = "https://6816738a26a599ae7c37ea2b.mockapi.io/unilab/rewius";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const { navigate } = useAppContext();
  const imgArray = Array(5).fill("");

  const cancel = () => {
    navigate("/cart");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFeedback = {
      name,
      email,
      comment,
    };

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      if (res.ok) {
        alert("Feedback submitted!");
        // Optionally reset form
        setName("");
        setEmail("");
        setComment("");
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col m-auto p-8 px-auto w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white mb-[177px] md:w-[400px]"
    >
      <p className="text-[14px] font-bold mb-[5px]">Name</p>
      <div className="flex gap-[5px] w-full px-[10px] py-[10px] border border-gray-300 rounded-[10px] text-[14px] mb-[20px]">
        <img src={assets.rate_person} alt="profile" />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none"
          required
        />
      </div>
      <p className="text-[14px] font-bold mb-[5px]">country/city</p>
      <div className="flex gap-[5px] w-full px-[10px] py-[10px] border border-gray-300 rounded-[10px] text-[14px] mb-[20px]">
        <img src={assets.email} alt="email" />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none"
          required
        />
      </div>
      <p className="text-[14px] font-bold mb-[5px]">
        Share your expenience in scalling
      </p>
      <div className="flex gap-2 mb-[30px]">
        <img src={assets.rate_star} alt="rating" />
        <img src={assets.rate_star} alt="rating" />
        <img src={assets.rate_star} alt="rating" />
        <img src={assets.rate_star} alt="rating" />
        <img src={assets.rate_star} alt="rating" />
      </div>
      <textarea
        placeholder="Add your comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded text-[14px] mb-[60px]"
        rows={4}
      ></textarea>
      <div className="flex justify-end w-full gap-4">
        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setComment("");
            cancel();
          }}
          className="px-6 py-2 font-medium text-[14px] cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-[46px] py-[14px] rounded-[8px] text-white bg-black font-medium cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Feedback;
