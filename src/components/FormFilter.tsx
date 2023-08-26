import { Col, Input, Row } from "antd";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function FormFilter({ getProduct }: any) {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (valueSearch) {
      searchParams.set("name", valueSearch);

      navigate("?" + searchParams.toString(), { replace: true });
    }
  }, [valueSearch]);

  return (
    <div style={{ marginBottom: "12px" }}>
      <Input
        defaultValue={valueSearch}
        onChange={debounce((e) => {
          setValueSearch(e.target.value);
        }, 500)}
      />
    </div>
  );
}
