import { Col, Input, Row, Slider } from "antd";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDidMount from "../hooks/useDidMount";
import productApi from "../services/productService";

export default function FormFilter({ setProduct }: any) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState<string>(
    searchParams.get("title_like") || ""
  );
  const [sliderValue, setSliderValue] = useState<[number, number]>([
    parseInt(searchParams.get("price_gte") || "0"),
    parseInt(searchParams.get("price_lte") || "0"),
  ]);
  const [initialSliderValue, setInitialSliderValue] = useState<
    [number, number]
  >([0, 0]);

  useEffect(() => {
    async function handleFilter() {
      if (valueSearch !== "") {
        searchParams.set("title_like", valueSearch);
      } else {
        searchParams.delete("title_like");
      }

      if (sliderValue[0] < sliderValue[1]) {
        searchParams.set("price_gte", sliderValue[0] + "");
        searchParams.set("price_lte", sliderValue[1] + "");

        await setProduct({
          title_like: valueSearch,
          price_gte: sliderValue[0],
          price_lte: sliderValue[1],
        });
      } else {
        searchParams.delete("price_gte");
        searchParams.delete("price_lte");

        await setProduct({
          title_like: valueSearch,
        });
      }

      navigate("?" + searchParams.toString(), { replace: true });
    }

    handleFilter();
  }, [valueSearch, sliderValue]);

  async function handleInitialSlider() {
    try {
      const productList = await productApi.getProductList({
        _sort: "price",
        _order: "desc",
      });

      setInitialSliderValue([
        Math.floor(productList[productList.length - 1].price),
        Math.ceil(productList[0].price),
      ]);
    } catch (error) {
      alert("error");
    }
  }

  useDidMount(() => {
    handleInitialSlider();
  });

  return (
    <div style={{ marginBottom: "12px" }}>
      <Input
        defaultValue={valueSearch}
        onChange={debounce((e) => {
          setValueSearch(e.target.value);
        }, 500)}
      />
      <Slider
        range
        min={initialSliderValue[0]}
        max={initialSliderValue[1]}
        defaultValue={sliderValue}
        step={1}
        onChange={debounce((value) => {
          setSliderValue(value);
        }, 500)}
      />
    </div>
  );
}
