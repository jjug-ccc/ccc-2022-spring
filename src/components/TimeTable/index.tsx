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
                <TableData title={''} proposalId={''} startTime={''} endTime={''} rowSpan={2} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} rowSpan={2} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} rowSpan={2} />
            </tr>
            <tr>
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
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
                <TableData title={'休憩'} startTime={'11:50'} endTime={'12:30'} />
            </tr>
            <tr>
                <TableData title={''} proposalId={''} startTime={''} endTime={''} rowSpan={2} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} rowSpan={2} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} rowSpan={2} />
                <TableData title={''} proposalId={''} startTime={''} endTime={''} />
            </tr>
            <tr>
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
