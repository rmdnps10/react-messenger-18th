import React from "react";
import ContactItem from "../../moleclues/contact/ContactItem";
import { Flex } from "../../atom/Flex";
import { dummyContactList } from "../../../assets/\bdummyList";
import { isSearchState } from "../../../recoil/atom";
import { useRecoilValue } from "recoil";
import SearchContainer from "../../moleclues/SearchContainer";
interface ContactItem {
  name: string;
  introduction: string;
}
function ContactList() {
  const isSearch:boolean = useRecoilValue(isSearchState);
  return (
    <>
      {isSearch ? (
        <SearchContainer />
      ) : (
        <Flex
          direction="column"
          align="center"
          gap="16"
          height="623px"
          margin="16px 0px 0px"
        >
          {dummyContactList.map((item: ContactItem) => (
            <ContactItem
              key={item.name}
              name={item.name}
              introduction={item.introduction}
            ></ContactItem>
          ))}
        </Flex>
      )}
    </>
  );
}

export default ContactList;
