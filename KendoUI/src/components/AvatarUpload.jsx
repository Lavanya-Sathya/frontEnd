import React, { useState } from "react";
import { Upload } from "@progress/kendo-react-upload";
import { Avatar, StackLayout } from "@progress/kendo-react-layout";
import AvatarImg from "../resources/avatar.jpg";
function AvatarUpload(fieldRenderProps) {
  const [value, setValue] = useState([]);
  const hasImage = value && value.length > 0;
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    if (hasImage) {
      var reader = new FileReader();
      reader.onload = function (e) {
        imgRef.current.setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(value[0].getRawFile());
    }
  }, [value, hasImage]);
  const onChangeHandler = (e) => {
    setValue(e.newState);
  };
  const onRemoveHandle = (e) => {
    setValue(e.newState);
  };
  return (
    <div className="upload-container">
      <StackLayout orientation="horizontal" gap={30}>
        <div className="k-flex-20">
          <Avatar
            shape="circle"
            type="image"
            style={{ width: 100, height: 100, flexBasis: 100 }}
          >
            (hasImage ? (<img ref={imgRef} src="#" />
            ))
            <img src={AvatarImg} alt="user" />
          </Avatar>
        </div>
        <div className="k-flex-80">
          <Upload
            autoUpload={false}
            showActionButtons={false}
            files={value}
            onAdd={onChangeHandler}
            onRemove={onRemoveHandle}
          />
        </div>
      </StackLayout>
    </div>
  );
}

export default AvatarUpload;
