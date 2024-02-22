import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import AvatarImage from "../resources/avatar.jpg";
function Header(props) {
  return (
    <div className="header">
      <AppBar themeColor="inherit">
        <AppBarSection>
          <Button icon="menu" onClick={props.onMenuClick}>
            <span className="fa-solid fa-bars" />
          </Button>
        </AppBarSection>
        <AppBarSection>
          <h3 className="title">Carved Rock Fitness</h3>
        </AppBarSection>
        <AppBarSpacer />
        <AppBarSection>
          <Button>
            <BadgeContainer>
              <span className="fa-solid fa-bell" />
              <Badge
                shape="dot"
                themeColor="info"
                size="small"
                position="inside"
              />
            </BadgeContainer>
          </Button>
        </AppBarSection>

        <AppBarSection>
          <DropDownList
            value={"English"}
            data={["English", "French", "Spanish"]}
          />
        </AppBarSection>
        <AppBarSection>
          <span className="k-appbar-seperator"></span>
        </AppBarSection>
        <AppBarSection>
          <Avatar type="image">
            <img src={AvatarImage} alt="" />
          </Avatar>
        </AppBarSection>
      </AppBar>
    </div>
  );
}

export default Header;
