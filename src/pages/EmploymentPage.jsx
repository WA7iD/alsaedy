import { useState } from "react";
import DownloadApp from "../components/Home/DownloadApp";
import { PostData } from "../utils/apiService";
import useGetData from "../Hooks/useGetData";
import Loader from "../shared/Loader";

const EmploymentPage = () => {
  const { data } = useGetData("/positions");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position_id: "",
    cv: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData((prevFormData) => ({
      ...prevFormData,
      cv: file,
    }));
  };
  const resetInputs = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      position_id: "",
      cv: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const formDataApi = new FormData();
    formDataApi.append("name", formData.name);
    formDataApi.append("email", formData.email);
    formDataApi.append("phone", formData.phone);
    formDataApi.append("position_id", formData.position_id);
    formDataApi.append("cv", formData.cv);
    try {
      setLoading(true);
      const res = await PostData("/employment_applications", formDataApi);
      if (res?.status) alert("تم الارسال بنجاح");
      resetInputs();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getFormData = () => {
    console.log(formData); // Here you could also return the data or do something else with it
  };
  return (
    <>
      {loading && <Loader />}
      <div className="container">
        <div className="bg-[#F5F5F5] p-5 rounded-3xl flex flex-col justify-center items-center py-14">
          <div className="flex flex-col justify-center items-center gap-4 mb-14">
            <h1 className="text-3xl font-bold text-primary">انضم معنا </h1>
            <p className="text-[#15254B] text-2xl">
              خبراء الرعاية الصحية المنزلية، نوفر لك مناخ ملائم للرعاية الصحية
              الأمنة
            </p>
          </div>
          <form onSubmit={handleSubmit} action="" className=" w-1/2">
            <div className="input-holder col-md-6 col-12">
              <label htmlFor="">الاسم</label>
              <input
                className="border-2 border-[#15254B33] rounded-md p-2"
                placeholder="ادخل الاسم كامل  "
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-holder col-md-6 col-12">
              <label htmlFor="">البريد الالكتروني</label>
              <input
                placeholder="ادخل البريد الالكتروني"
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
              <label htmlFor="">اختر الوظيفة </label>
              <select
                name="position_id"
                value={formData.position}
                onChange={handleInputChange}
                className="form-control"
              >
                {data?.data?.map((e) => {
                  return e.children?.map((e) => (
                    <option value={e.id} key={e.id}>
                      {e.name}
                    </option>
                  ));
                })}
              </select>
            </div>
            <div className="input-holder col-md-6 col-12">
              <label htmlFor=""> تحميل السيرة الذاتية </label>
              <input
                placeholder="تحميل السيرة الذاتية"
                type="file"
                name="cv"
                onChange={handleFileChange}
              />
            </div>
            <button
              className="bg-secondary text-white p-3 rounded-3xl w-full font-bold"
              onClick={getFormData}
            >
              حجز موعد
            </button>
          </form>
        </div>
        <DownloadApp />
      </div>
    </>
  );
};

export default EmploymentPage;
