import React from 'react'

function FormField({ type, name, value, onChange }) {
    return (
        <div>
        <label>
          Nome da Categoria:
          <input
            type={type}
            value={value}
            name={name}
            onChange = {onChange}
          />
        </label>
      </div>
    )
}

export default FormField