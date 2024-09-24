import React, { useState } from "react";
import PageHeader from "../shared/PageHeader";
import usePostData from "../Hooks/usePostData";
import { PostData } from "../utils/apiService";
import Loader from "../shared/Loader";

const BookingPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetInputs = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const formDataApi = new FormData();
    formDataApi.append("name", formData.name);
    formDataApi.append("email", formData.email);
    formDataApi.append("phone", formData.phone);
    formDataApi.append("message", formData.message);

    try {
      setLoading(true);
      const res = await PostData("/contact-us", formDataApi);
      if (res?.status) alert("تم الارسال بنجاح");
      resetInputs();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="container mb-20">
        <PageHeader pageName={" احجز الان"} />
        <div className="bg-[#F5F5F5] p-5 rounded-3xl flex flex-col justify-center items-center py-14">
          <div className="flex flex-col justify-center items-center gap-4 mb-14">
            <h1 className="text-3xl font-bold text-primary">
              اطلب وحدد موعد الأن
            </h1>
            <p className="text-[#15254B] text-2xl">
              خبراء الرعاية الصحية المنزلية، نوفر لك مناخ ملائم للرعاية الصحية
              الأمنة
            </p>
          </div>
          <form action="" className=" w-1/2" onSubmit={handleSubmit}>
            <div className="input-holder col-md-6 col-12">
              <label htmlFor="">الاسم</label>
              <input
                className="border-2 border-[#15254B33] rounded-md p-2"
                placeholder="ادخل اسم المستخدم"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label htmlFor="">البريد الالكتروني</label>
              <input
                placeholder="ادخل البريد الالكتروني  "
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label htmlFor="">رقم الجوال</label>
              <input
                placeholder="ادخل رقم الجوال"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-holder col-md-6 col-12">
              <label htmlFor="">الرسالة</label>
              <input
                placeholder="اكتب الرساله"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="text-white rounded-xl bg-secondary py-2 px-4 font-semibold"
            >
              حجز الان
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
