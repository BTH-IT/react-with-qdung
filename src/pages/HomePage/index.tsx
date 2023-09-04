import { useEffect, useState } from "react";
import { Col, Pagination, Row, Spin, Slider, Button } from "antd";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import CardItem, { ICardItemProps } from "../../components/cardItem";
import cartApi, { ICartItemProps } from "../../services/cartService";
import { IMeta } from "../../App";
import productApi from "../../services/productService";
import useDidMount from "../../hooks/useDidMount";
import FormFilter from "../../components/FormFilter";
import * as Styled from "./styles";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHelper";
import {
  getCart,
  setMeta,
  getProduct,
  getProductFall,
  getProductRequest,
} from "../../redux/action";

function HomePage() {
  const dispatch = useAppDispatch();
  const productsReducer = useAppSelector((state) => state.products);
  const cartsReducer = useAppSelector((state) => state.carts);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  async function setProduct(metaProps?: IMeta) {
    try {
      dispatch(getProductRequest());
      const { _totalRows, ...query } = metaProps || productsReducer.meta;

      const res = await productApi.getAll({
        ...query,
      });

      dispatch(getProduct(res));
    } catch (error) {
      alert("error");
    } finally {
      dispatch(getProductFall());
    }
  }

  async function getCartList() {
    try {
      const cartList = await cartApi.getCartList();

      dispatch(getCart({ data: cartList }));
    } catch (error) {
      alert("error");
    }
  }

  useDidMount(() => {
    if (searchParams.has("price_lte") && searchParams.has("price_gte")) {
      dispatch(
        setMeta({
          ...productsReducer.meta,
          price_lte: parseInt(searchParams.get("price_lte") || "0"),
          price_gte: parseInt(searchParams.get("price_gte") || "0"),
        })
      );
    }

    if (searchParams.has("title_like")) {
      dispatch(
        setMeta({
          ...productsReducer.meta,
          title_like: searchParams.get("title_like") || "",
        })
      );
    }

    getCartList();
  });

  useEffect(() => {
    searchParams.set("_limit", productsReducer.meta._limit + "");
    searchParams.set("_page", productsReducer.meta._page + "");
    navigate("?" + searchParams.toString(), { replace: true });
  }, [productsReducer.meta._limit, productsReducer.meta._page]);

  return (
    <div className="container">
      <>
        <Row gutter={20} align={"middle"} style={{ marginBottom: "20px" }}>
          <Col xs={12}>
            <FormFilter
              setProduct={(params: any) =>
                setProduct({
                  ...productsReducer.meta,
                  ...params,
                })
              }
            />
          </Col>
          <Col xs={12}>
            <p style={{ textAlign: "center" }}>
              Cart: {cartsReducer.data.length}
            </p>
            <Link
              style={{
                textAlign: "center",
                marginTop: "12px",
                display: "block",
              }}
              to={"/carts"}
            >
              Go to cart
            </Link>
          </Col>
        </Row>
        {productsReducer.isLoading ? (
          <Styled.LoadingWrapper>
            <Spin />
          </Styled.LoadingWrapper>
        ) : (
          <Styled.RowWrapper gutter={12}>
            {productsReducer.data.map((product) => (
              <Col key={product.title} xs={6}>
                <CardItem product={product} getCartList={getCartList} />
              </Col>
            ))}
          </Styled.RowWrapper>
        )}
        {productsReducer.data.length > 0 &&
          productsReducer.meta._totalRows > productsReducer.meta._limit &&
          !productsReducer.isLoading && (
            <Pagination
              defaultPageSize={productsReducer.meta._limit}
              total={productsReducer.meta._totalRows}
              onChange={(page) =>
                setProduct({
                  ...productsReducer.meta,
                  _page: page,
                })
              }
              defaultCurrent={productsReducer.meta._page}
            />
          )}
      </>
    </div>
  );
}

export default HomePage;
