import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

type TableDataProps = {
    title: string,
    proposalId?: string,
    startTime?: string,
    endTime?: string,
    rowSpan?: number,
}

const TableData : React.FC<TableDataProps> = (props) => {
    if (props.startTime == undefined || props.endTime == undefined) {
        return (
            <td rowSpan={props.rowSpan}>
                <span className="small">{props.title}</span>
            </td>
        );
    }
    if (props.proposalId == undefined) {
        return (
            <td rowSpan={props.rowSpan}>
                <i><FontAwesomeIcon icon={faClock} size="sm"/></i> <span className="fw-lighter small">{props.startTime}〜{props.endTime}</span><br/>
                <span className="small">{props.title}</span>
            </td>
        );
    }

    return (
        <td rowSpan={props.rowSpan}>
            <i><FontAwesomeIcon icon={faClock} size="sm"/></i> <span className="fw-lighter small">{props.startTime}〜{props.endTime}</span><br/>
            <a href={'https://fortee.jp/jjug-ccc-2022-spring/proposal/' + props.proposalId} target="_blank" rel="noopener noreferrer">
                <span className="small">{props.title}</span>
            </a>
        </td>
    );
};
TableData.defaultProps = {
    rowSpan: 1
};

const TimeTable : React.FC = () => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Track A</th>
                <th>Track B</th>
                <th>Track C</th>
                <th>Track D</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <TableData
                    title={'JUnitで闘うレガシーコード改善'}
                    proposalId={'c966194c-c7d5-43c2-a65e-5d8f4ac94cf2'}
                    startTime={'10:00'}
                    endTime={'10:25'}
                />
                <TableData
                    title={'ß AWS Batch × Spring Batch でクラウド最適なバッチを構築した話'}
                    proposalId={'fbb1e886-d51a-4052-b284-6e9c80f132ea'}
                    startTime={'10:00'}
                    endTime={'10:25'}
                />
                <TableData
                    title={'開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する'}
                    proposalId={'153b87bf-85c4-4274-9954-4e3f614724cb'}
                    startTime={'10:00'}
                    endTime={'10:25'}
                />
                <TableData
                    title={'サービス開発の理想と現実・短納期でローンチした新サービスをJavaで開発した話'}
                    proposalId={'3bf78003-4672-457c-a8fc-47adb4a1812e'}
                    startTime={'10:00'}
                    endTime={'10:50'}
                    rowSpan={2}
                />
            </tr>
            <tr>
                <TableData
                    title={'Testcontainersでコンテナを使ったテストを実行しよう'}
                    proposalId={'83759ca2-1230-413f-817f-3a9d99fc8e2a'}
                    startTime={'10:25'}
                    endTime={'10:50'}
                />
                <TableData
                    title={'Spring Boot と WebRTC を用いた Web 会議システムの開発'}
                    proposalId={'afd5d809-a47b-4932-b31d-aebab30c2e29'}
                    startTime={'10:25'}
                    endTime={'10:50'}
                />
                <TableData
                    title={'Java で作るカスタム GitHub Actions'}
                    proposalId={'0c85f6b2-d44d-40c2-8e6d-ddc1fe821273'}
                    startTime={'10:25'}
                    endTime={'10:50'}
                />
            </tr>
            <tr>
                <TableData title={'休憩'} startTime={'10:50'} endTime={'11:00'} />
                <TableData title={'休憩'} startTime={'10:50'} endTime={'11:00'} />
                <TableData title={'休憩'} startTime={'10:50'} endTime={'11:00'} />
                <TableData title={'休憩'} startTime={'10:50'} endTime={'11:00'} />
            </tr>
            <tr>
                <TableData
                    title={'クラウドネイティブ環境におけるJavaチューニングの進め方 - 超PayPay祭の事例'}
                    proposalId={'f62f3b34-2318-4a1a-adec-ea7ed35825e1'}
                    startTime={'11:00'}
                    endTime={'11:50'}
                />
                <TableData
                    title={'クレジットカード決済システムをJavaで構築して10年間運用した話'}
                    proposalId={'dc6c1fa2-9b64-4cdb-a602-30d535c9849f'}
                    startTime={'11:00'}
                    endTime={'11:50'}
                />
                <TableData
                    title={'k8s 疲れの方へ送る、k8s ベースのらくらくマイクロサービス動作基盤のご紹介〜 Dapr ベースのマイクロサービス開発から GitHub Action を利用した CI/CD 〜'}
                    proposalId={'620b5a5a-ced8-417d-bd0f-c1a68baa3c97'}
                    startTime={'11:00'}
                    endTime={'11:50'}
                />
                <TableData
                    title={'「サポート」は製品開発？　- JDBCライブラリ屋さんが実践する攻めのテクニカルサポートとJavaエンジニアのキャリアについて -'}
                    proposalId={'6964800f-b92c-47a6-b161-d6bf8884b02c'}
                    startTime={'11:00'}
                    endTime={'11:50'}
                />
            </tr>
            <tr>
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
            </tr>
            <tr>
                <TableData
                    title={'JDK Flight Recorder入門'}
                    proposalId={'c50104bb-a6ae-4077-8ac3-cce2f65207b3'}
                    startTime={'12:30'}
                    endTime={'13:20'}
                    rowSpan={2}
                />
                <TableData
                    title={'ライブコーディングで学ぶKotlinチュートリアル'}
                    proposalId={'4177bd7c-c165-4890-9264-0b66d28ba81c'}
                    startTime={'12:30'}
                    endTime={'12:55'}
                />
                <TableData
                    title={'Java初心者が知っておくべきプログラミングのこと'}
                    proposalId={'9b96614f-c605-45cd-8307-a800c84519ca'}
                    startTime={'12:30'}
                    endTime={'13:20'}
                    rowSpan={2}
                />
                <TableData
                    title={'Lauchableで僕が学んだ働き方 〜リモートワークで会社もプロダクトも１から作る経験〜'}
                    proposalId={'6c20efbc-35c9-44a8-add8-7c35cfead995'}
                    startTime={'12:30'}
                    endTime={'13:20'}
                    rowSpan={2}
                />
            </tr>
            <tr>
                <TableData
                    title={'RabbitMQを用いたイベント駆動アーキテクチャの紹介'}
                    proposalId={'355ae050-d7e6-494b-b7a6-c30a4f42d97b'}
                    startTime={'12:55'}
                    endTime={'13:20'}
                />
            </tr>
            <tr>
                <TableData title={'休憩'} startTime={'13:20'} endTime={'13:30'} />
                <TableData title={'休憩'} startTime={'13:20'} endTime={'13:30'} />
                <TableData title={'休憩'} startTime={'13:20'} endTime={'13:30'} />
                <TableData title={'休憩'} startTime={'13:20'} endTime={'13:30'} />
            </tr>
            <tr>
                <TableData
                    title={'Java アプリとAWS の良い関係 - AWS でJava アプリを実行する一番簡単な方法教えます'}
                    proposalId={'7583d339-9e53-4726-9ecd-617e43c540ef'}
                    startTime={'13:30'}
                    endTime={'14:20'}
                />
                <TableData
                    title={'分散データベースTiDB Cloudで構築するWebアプリケーション'}
                    proposalId={'c92a5edb-8cb0-4355-98f5-44fc6acad5b6'}
                    startTime={'13:30'}
                    endTime={'14:20'}
                />
                <TableData
                    title={'Azure Pipelinesを使って学んだ CI/CD環境のあれこれ'}
                    proposalId={'ebb99b9d-75dc-4816-a321-00e98602d78a'}
                    startTime={'13:30'}
                    endTime={'14:20'}
                />
                <TableData
                    title={'保険基幹システムのアーキテクチャ : シンプレクスの技術的チャレンジ'}
                    proposalId={'8d2025e5-ce24-4d5f-8157-76d8c652a8a7'}
                    startTime={'13:30'}
                    endTime={'14:20'}
                />
            </tr>
            <tr>
                <TableData title={'休憩'} startTime={'14:20'} endTime={'15:00'} />
                <TableData title={'休憩'} startTime={'14:20'} endTime={'15:00'} />
                <TableData title={'休憩'} startTime={'14:20'} endTime={'15:00'} />
                <TableData title={'休憩'} startTime={'14:20'} endTime={'15:00'} />
            </tr>
            <tr>
                <TableData
                    title={'パターンマッチングを学んで新しいJavaの世界へ！Java 18までの目玉機能をおさらいしよう'}
                    proposalId={'b15d6b6f-d9e1-44b8-91f2-1e4779620c75'}
                    startTime={'15:00'}
                    endTime={'15:50'}
                    rowSpan={2}
                />
                <TableData
                    title={'JUnit5.7, 5.8の新機能紹介'}
                    proposalId={'4152bc33-c3f3-4041-9c3e-3056d82dd51c'}
                    startTime={'15:00'}
                    endTime={'15:50'}
                    rowSpan={2}
                />
                <TableData
                    title={'RDRA + JavaによるレジャーSaaSプロダクトの要件定義と実装のシームレスな接続'}
                    proposalId={'c74c869a-b0ac-4cde-a22f-3c2592b68744'}
                    startTime={'15:00'}
                    endTime={'15:50'}
                    rowSpan={2}
                />
                <TableData
                    title={'脱二重メンテナンス！ドキュメント自動生成への道'}
                    proposalId={'e60f67fe-a543-457d-adfc-75354b677dc9'}
                    startTime={'15:00'}
                    endTime={'15:25'}
                />
            </tr>
            <tr>
                <TableData
                    title={'Javaのビルドやバージョンの違いをグラフデータベースで理解する。移行で困らないための知識グラフを作ろう。'}
                    proposalId={'78f6603d-eeea-4066-afdd-fc605bdd358e'}
                    startTime={'15:25'}
                    endTime={'15:50'}
                />
            </tr>
            <tr>
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
            </tr>
            <tr>
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
            </tr>
            <tr>
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
            </tr>
            <tr>
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
            </tr>
            <tr>
                <TableData title={''} />
                <TableData title={''} />
                <TableData title={''} />
                <TableData title={'クロージング'} startTime={'11:50'} endTime={'12:30'} />
            </tr>
            </tbody>
        </table>
    );
}

export default TimeTable;
