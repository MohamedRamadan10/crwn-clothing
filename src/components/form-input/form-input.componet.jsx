import "./form-input.styles.scss";

export default function FormInput({ label, ...otherProps }) {
   return (
      <div className='group'>
         {label && (
            <label
               className={`form-input-label ${
                  otherProps.value.length ? "shrink" : ""
               }`}
            >
               {label}
            </label>
         )}
         <input className='form-input' {...otherProps} />
      </div>
   );
}
