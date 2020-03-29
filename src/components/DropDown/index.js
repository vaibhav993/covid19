import React, { memo } from "react";

import "./index.scss";

const Dropdown = memo(({ name, label, options, value="default", defaultValue="", onChange }) => {

    const onSelect = (e) => {
        onChange && onChange(e.target.value);
    }

    return (
        <div className="input-group mb-3">
            {
                label && <div class="input-group-prepend">
                    <span class="input-group-text" id={`label-${name}`}>{label}</span>
                </div>
            }
            <select 
                id={name}
                className={value === "default" ? "form-control disabled" : "form-control" }
                value={value}
                onChange={onSelect}
                aria-describedby={`label-${name}`}
            >
                <option value='default' disabled>{defaultValue}</option>
                {
                    options.map(o => (
                        <option className="tb" key={o.value} value={o.value}>{o.label}</option>
                    ))
                }
            </select>
        </div>
    )
});

export default Dropdown;