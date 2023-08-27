import { useEffect, useState } from "react";
import FormFilter from "./components/FormFilter";
import CartItem, { ICardItemProps } from "./components/cartItem";
import productApi from "./services/productService";
import useDidMount from "./hooks/useDidMount";
import { Col, Pagination, Row, Spin, Slider } from "antd";
import * as Styled from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";

export interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
  title_like?: string;
  price_gte?: number;
  price_lte?: number;
}

export interface IResponse<T> {
  data: T[];
  pagination: IMeta;
}

function App() {
  const [products, setProduct] = useState<ICardItemProps[]>([]);
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
  });

  useEffect(() => {
    searchParams.set("_limit", meta._limit + "");
    searchParams.set("_page", meta._page + "");
    navigate("?" + searchParams.toString(), { replace: true });
  }, [meta._limit, meta._page, navigate, searchParams]);

  return (
    <div className="container">
      <>
        <FormFilter getProduct={getProduct} meta={meta} />
        {isLoading ? (
          <Styled.LoadingWrapper>
            <Spin />
          </Styled.LoadingWrapper>
        ) : (
          <Row gutter={12}>
            {products.map((product) => (
              <Col key={product.title} xs={6}>
                <CartItem
                  title={product.title}
                  image={product?.image}
                  price={product.price}
                />
              </Col>
            ))}
          </Row>
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

export default App;
