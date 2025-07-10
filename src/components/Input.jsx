import { useState } from "react"

export default function Input({type, name, id, placeholder, isrequired}) {
  const [value, setValue] = useState('');
  return (
    <input
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={(e) => setValue(e.value)}
    required={isrequired}
    />
  )
}