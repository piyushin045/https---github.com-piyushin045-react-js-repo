import React,{useId} from 'react'

function Select({
    options,
    label,
    className = "", // better to havr a empty string in className
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
    {label && <label
    htmlFor='{id}'
    className=''>
    </label>}
    <select
    {...props}
    id={id}
    ref = {ref}
    className={`px-3 py-2 rounded-lg bg-white
    text-black outline-none focus:bg-gray-50
    duration-200 border border-gray-200 w-full
    ${className}`}>
        {options?.map((option)=>(
            <option keys = {option} value = {option}>
                {option}
            </option>
        ))}
    </select>
    </div>
  )
}

export default React.forwardRef(Select)  // this is the other way to define forward ref


// by default opion se array milta hai
// if option does not contain the value then it will crash 
// to avoid this issue we have to apply option loop
