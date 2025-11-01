const Contact = () => {
  return (
    <section id="contact" className="flex justify-center items-center  flex-col gap-8  m-4">
      <h1 className="capitalize text-6xl  underline">Contact</h1>
      <h1 className="text-3xl capitalize text-center">you can contact me by E-mail</h1>
      <div className="flex justify-center items-center flex-col  gap-4 w-full">
       
        <div className=" flex justify-center items-center flex-col  gap-4 md:px-32 py-4 bg-yellow-100 border-2 border-black rounded-2xl w-80 md:w-auto ">
        <h1 className="md:text-5xl text-3xl  uppercase">my e-mail:</h1>
        <h2 className="md:text-5xl text-3xl  font-bold">Djebril.zidour.pro@gmail.com</h2>
        </div>
      </div>
      

      {/* <h1 className="capitalize text-xl ">can't wait to work with you</h1> */}
    </section>
  );
};
export default Contact;
