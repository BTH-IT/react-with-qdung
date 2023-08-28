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

function HomePage() {
  const [products, setProduct] = useState<ICardItemProps[]>([]);
  const [cartList, setCartList] = useState<ICartItemProps[]>([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [meta, setMeta] = useState<IMeta>({
    _limit: parseInt(searchParams.get("_limit") || "8"),
    _totalRows: 0,
    _page: parseInt(searchParams.get("_page") || "1"),
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getProduct(metaProps?: IMeta) {
    try {
      setIsLoading(true);
      const { _totalRows, ...query } = metaProps || meta;

      const res = await productApi.getAll({
        ...query,
      });

      setProduct(res.data);
      setMeta(res.pagination);
    } catch (error) {
      alert("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function getCartList() {
    try {
      const cartList = await cartApi.getCartList();

      setCartList(cartList);
    } catch (error) {
      alert("error");
    }
  }

  useDidMount(() => {
    if (searchParams.has("price_lte") && searchParams.has("price_gte")) {
      setMeta({
        ...meta,
        price_lte: parseInt(searchParams.get("price_lte") || "0"),
        price_gte: parseInt(searchParams.get("price_gte") || "0"),
      });
    }

    if (searchParams.has("title_like")) {
      setMeta({
        ...meta,
        title_like: searchParams.get("title_like") || "",
      });
    }

    getCartList();
  });

  useEffect(() => {
    searchParams.set("_limit", meta._limit + "");
    searchParams.set("_page", meta._page + "");
    navigate("?" + searchParams.toString(), { replace: true });
  }, [meta._limit, meta._page]);

  return (
    <div className="container">
      <>
        <Row gutter={20} align={"middle"} style={{ marginBottom: "20px" }}>
          <Col xs={12}>
            <FormFilter
              getProduct={(params: any) =>
                getProduct({
                  ...meta,
                  ...params,
                })
              }
            />
          </Col>
          <Col xs={12}>
            <p style={{ textAlign: "center" }}>Cart: {cartList.length}</p>
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
        {isLoading ? (
          <Styled.LoadingWrapper>
            <Spin />
          </Styled.LoadingWrapper>
        ) : (
          <Styled.RowWrapper gutter={12}>
            {products.map((product) => (
              <Col key={product.title} xs={6}>
                <CardItem
                  product={product}
                  cartList={cartList}
                  getCartList={getCartList}
                />
              </Col>
            ))}
          </Styled.RowWrapper>
        )}
        {products.length > 0 && meta._totalRows > meta._limit && !isLoading && (
          <Pagination
            defaultPageSize={meta._limit}
            total={meta._totalRows}
            onChange={(page) =>
              getProduct({
                ...meta,
                _page: page,
              })
            }
            defaultCurrent={meta._page}
          />
        )}
      </>
    </div>
  );
}

export default HomePage;
