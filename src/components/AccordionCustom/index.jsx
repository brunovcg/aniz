import { Accordion } from "react-bootstrap";

const AccordionCustom = ({
  list,
  Component,
  idKey,
  titleKey,
  disableKey = "active",
  fontFamily,
  margin,
  fontSize ="35px",
  backgroundColor = "var()",
}) => {
  return (
    <Accordion style={{ width: "100%", margin: margin }}>
      {list &&
        list.map((items, index) => (
          <Accordion.Item eventKey={items[idKey]} key={items[idKey]}>
            <Accordion.Header>
              {" "}
              <div
                style={{
                  color: !items[disableKey] && "red",
                  fontSize: fontSize,
                  fontFamily: fontFamily,
                }}
              >
                {" "}
                {items[titleKey]}
              </div>{" "}
            </Accordion.Header>
            <Accordion.Body
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0",
                backgroundColor: backgroundColor,
               
              }}
            >
              <Component item={items} index={index} menuLength={list.length} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
};

export default AccordionCustom;
