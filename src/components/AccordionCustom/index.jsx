import { Accordion } from "react-bootstrap";

const AccordionCustom = ({
  list,
  Component,
  idKey,
  titleKey,
  disableKey = "active",
}) => {
  return (
    <Accordion style={{ width: "100%", marginTop: "10px" }}>
      {list &&
        list.map((items, index) => (
          <Accordion.Item eventKey={items[idKey]} key={items[idKey]}>
            <Accordion.Header>
              {" "}
              <div
                style={{ color: !items[disableKey] && "red", fontSize: "35px" }}
              >
                {" "}
                {items[titleKey]}
              </div>{" "}
            </Accordion.Header>
            <Accordion.Body
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Component
                category={items}
                index={index}
                menuLength={list.length}
              />
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
};

export default AccordionCustom;
