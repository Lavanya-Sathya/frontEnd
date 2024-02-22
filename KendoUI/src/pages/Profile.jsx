import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Fade } from "@progress/kendo-react-animation";

import { Form, FormElement, Field } from "@progress/kendo-react-form";

import countries from "../resources/countries";
import React from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";
import MyEditor from "../components/MyEditor";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import AvatarUpload from "../components/AvatarUpload";
function Profile() {
  const [show, setShow] = React.useState(false);
  const country = countries.map((x) => x.name);
  // const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  const handleSubmit = (dataItem) => setShow(true);

  return (
    <div id="Profile">
      <Card className="card-container">
        <CardHeader>Profile Setting</CardHeader>
        <CardBody>
          <div className="form-container">
            <Form
              onSubmit={handleSubmit}
              render={(formRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                  <div className="form-field">
                    <Field
                      name={"avatar"}
                      component={AvatarUpload}
                      label={"Avatar Upload"}
                    />
                  </div>
                  <div className="form-field">
                    <Field
                      name={"firstName"}
                      component={Input}
                      label={"First Name"}
                    />
                  </div>
                  <div className="form-field">
                    <Field
                      name={"lastName"}
                      component={Input}
                      label={"Last Name"}
                    />
                  </div>
                  <div className="form-field">
                    <Field name={"email"} component={Input} label={"Email"} />
                  </div>
                  <div className="form-field">
                    <Field
                      name={"country"}
                      component={DropDownList}
                      data={country}
                      label={"Country"}
                    />
                  </div>
                  <div className="form-field">
                    <Field
                      name={"biography"}
                      component={MyEditor}
                      id={"biography"}
                    />
                  </div>
                  <div className="form-field">
                    <Button style={{ margin: "10px" }}>Cancel</Button>
                    <Button style={{ margin: "10px" }} themeColor={"primary"}>
                      Save
                    </Button>
                  </div>
                </FormElement>
              )}
            />
            {/* <div>
          <Input label={"First Name"} />
        </div>
        <div>
          <Input label={"Last Name"} />
        </div>
        <div>
          <Input label={"Email"} />
        </div>
        <div>
          <DropDownList data={country} />
        </div>
        <Button style={{ margin: "10px" }}>Cancel</Button>
        <Button style={{ margin: "10px" }} themeColor={"primary"}>
          Save
        </Button> */}
          </div>
        </CardBody>
      </Card>
      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: "flex-start",
          flexWrap: "wrap-reverse",
        }}
      >
        <Fade>
          {show && (
            <Notification
              type={{ style: "success", icon: true }}
              closable={true}
              onClose={() => setShow(false)}
            >
              <span>Your Form is Submitted</span>
            </Notification>
          )}
        </Fade>
      </NotificationGroup>
    </div>
  );
}

export default Profile;
