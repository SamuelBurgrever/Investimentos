import React, { useEffect, useState } from 'react';
import Share from "../ShareCards/Share";
import { FetchShareListPaged } from '../../servicos/InvestimentosAPI';
import './PagedList.css'

const PagedList: React.FC = () => {
    const [shares, setShares] = useState<any[]>([]);
    const [page, setPage] = useState(2);
    const [resultsPerPage] = useState(6); // 6 resultados por página
    useEffect(() => {
        const fetchShares = async () => {
            try {
                const data = await FetchShareListPaged(page, resultsPerPage);
                setShares(data);
            } catch (error) {
                console.error('Erro ao carregar ações: ', error);
            }
        };
        fetchShares();
    }, [page, resultsPerPage]);
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {shares.length > 0 ? (
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="row">
                                {shares.map((share, index) => (
                                    <div className="col-4card-spacing" key={index}>
                                        <Share 
                                            logoUrl={share.logoUrl} 
                                            longName={share.longName} 
                                            symbol={share.symbol} 
                                            regularMarketPrice={share.regularMarketPrice} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>Carregando ações...</p>
                    )}
                </div>

                <div className="row">
                            <div className="card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                </div>
                

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default PagedList;