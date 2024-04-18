// import React from "react";
// import { FormProvider, useForm, useFormContext } from "react-hook-form";

// const TestForm = () => {
//   const methods = useForm();

//   const onSubmit = methods.handleSubmit((data) => {
//     console.log(data);
//   });

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     onSubmit();
//   };

// //   const { register } = useFormContext();

//   return (
//     <div>
//       <FormProvider {...methods}>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <div className=" flex flex-col">
//             <label htmlFor="email"></label>
//             <input
//               type="email"
//               id="email"
//               {...register("email", {
//                 required: {
//                   value: true,
//                   message: "required",
//                 },
//               })}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               {...register("password", {
//                 required: {
//                   value: true,
//                   message: "required",
//                 },
//               })}
//             />
//           </div>
//           <button type="submit">sign in</button>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default TestForm;
