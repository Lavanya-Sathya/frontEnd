import { Button } from "@progress/kendo-react-buttons";
import { Reveal } from "@progress/kendo-react-animation";

import { Card, CardBody, CardHeader } from "@progress/kendo-react-layout";
import React, { useState } from "react";

function Info() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div id="info">
      <Card className="card-container">
        <CardHeader>Info</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos
          voluptatem itaque sed fuga corporis voluptatibus blanditiis quis
          aliquam nostrum amet repellat obcaecati dicta accusantium dolore
          repudiandae, asperiores sit exercitationem, pariatur neque! Reiciendis
          beatae totam deserunt esse veniam sint perferendis, quia cum fugit
          cupiditate officiis tenetur iure iste culpa voluptate quisquam labore
          corporis voluptates eaque maiores eos ullam sequi iusto. Eius
          consequatur, repellat veritatis quaerat expedita corrupti sit
          similique doloribus amet optio iste enim assumenda laboriosam vel ad,
          pariatur illo ea hic? Ut eos repellat cum assumenda, nobis libero
          molestiae obcaecati aperiam, illo, quae porro excepturi numquam
          voluptas earum sequi!
          {/* <Reveal> */}
          {show && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium aperiam rem numquam magnam, explicabo earum
              repudiandae facere. Beatae, esse inventore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad voluptatum architecto,
            </p>
          )}
          {/* </Reveal> */}
          <div>
            <Button style={{ margin: "20px" }} onClick={handleClick}>
              {show ? "Read Less" : "Read More"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Info;
