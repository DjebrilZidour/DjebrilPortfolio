const Contact = () => {
  return (
    <section id="contact" className="flex justify-center items-center  flex-col gap-8  m-4">
      <h1 className="capitalize text-5xl">Contact</h1>
      <h1 className="text-3xl capitalize">you can contact me by E-mail or phone number</h1>
      <div className="flex justify-center items-center flex-col  gap-4 w-full">
        <div className=" flex justify-center items-center flex-col  gap-4 px-44 py-4 bg-yellow-100 border-2 border-black rounded-2xl ">
        <h1 className="text-5xl uppercase">my phone number:</h1>
        <h2 className="text-5xl font-bold">+213 556 94 65 14</h2>
        </div>
        <div className=" flex justify-center items-center flex-col  gap-4 px-32 py-4 bg-yellow-100 border-2 border-black rounded-2xl ">
        <h1 className="text-5xl uppercase">my e-mail:</h1>
        <h2 className="text-5xl font-bold">Djebril.zidour.pro@gmail.com</h2>
        </div>
      </div>
      

      <h1 className="capitalize text-xl ">can't wait to work with you</h1>
    </section>
  );
};
export default Contact;
