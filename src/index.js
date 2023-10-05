import React from "react";
import { createRoot } from 'react-dom/client';

import Card from './components/Card';
import Collapse from "./components/Collapse";

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card-group w-100">

                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card
                                cardTitle="Zindandan Mehmed'e Mektup"
                                cardText="Necip Fazıl Kısakürek
                                Zindandan Mehmed'e Mektup
                                Necip Fazıl Kısakürek
                                Zindan iki hece, Mehmed'im lâfta!
                                Baba katiliyle baban bir safta!
                                Bir de, geri adam, boynunda yafta...
                                Halimi düşünüp yanma Mehmed'im!
                                Kavuşmak mı? .. Belki... Daha ölmedim!
                                "
                                updatedTime="Last Updated 1 min ago"
                                image="https://picsum.photos/id/32/200/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card
                                cardTitle="Canım İstanbul"
                                cardText="Ruhumu eritip de kalıpta dondurmuşlar;
                                Onu İstanbul diye toprağa kondurmuşlar.
                                İçimde tüten bir şey; hava, renk, eda, iklim;
                                O benim, zaman, mekan aşıp geçmiş sevgilim.
                                Çiçeği altın yaldız, suyu telli pulludur;
                                Ay ve güneş ezelden iki İstanbulludur.
                                Denizle toprak, yalnız onda ermiş visale,
                                Ve kavuşmuş rüyalar, onda, onda misale.
                                "
                                updatedTime="Last Updated 3 min ago"
                                image="https://picsum.photos/id/37/200/300"
                            />
                        </Collapse>
                    </div>

                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card
                                cardTitle="Kaldırımlar 1"
                                cardText="Sokaktayım, kimsesiz bir sokak ortasında;
                                Yürüyorum, arkama bakmadan yürüyorum.
                                Yolumun karanlığa saplanan noktasında,
                                Sanki beni bekleyen bir hayal görüyorum.
                                "
                                updatedTime="Last Updated 10 min ago"
                                image="https://picsum.photos/id/38/200/300"
                            />
                        </Collapse>
                    </div>

                </div>
            </div>
    </div>

    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
