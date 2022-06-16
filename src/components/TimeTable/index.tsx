import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

type TableDataProps = {
    title: string,
    proposalId: string,
    startTime: string,
    endTime: string,
    rowSpan?: number,
}

const TableData : React.FC<TableDataProps> = (props) => {
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
                <td><span className="small">JUnitで闘うレガシーコード改善</span></td>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
                <td><span className="small">開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する</span></td>
            </tr>
            <tr>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
            </tr>
            <tr>
                <td><span className="small">JUnitで闘うレガシーコード改善</span></td>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
                <td><span className="small">開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する</span></td>
                <td><span className="small">サービス開発の理想と現実・短納期でローンチした新サービスをJavaで開発した話</span></td>
            </tr>
            <tr>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
            </tr>
            <tr>
                <td rowSpan={2}><span className="small">JUnitで闘うレガシーコード改善</span></td>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
                <td rowSpan={2}><span className="small">開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する</span></td>
                <td rowSpan={2}><span className="small">サービス開発の理想と現実・短納期でローンチした新サービスをJavaで開発した話</span></td>
            </tr>
            <tr>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
            </tr>
            <tr>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
            </tr>
            <tr>
                <td><span className="small">JUnitで闘うレガシーコード改善</span></td>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
                <td><span className="small">開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する</span></td>
                <td><span className="small">サービス開発の理想と現実・短納期でローンチした新サービスをJavaで開発した話</span></td>
            </tr>
            <tr>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
            </tr>
            <tr>
                <td rowSpan={2}><span className="small">JUnitで闘うレガシーコード改善</span></td>
                <td rowSpan={2}><span className="small">サービス開発の理想と現実・短納期でローンチした新サービスをJavaで開発した話</span></td>
                <td rowSpan={2}><span className="small">開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する</span></td>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
            </tr>
            <tr>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
            </tr>
            <tr>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
            </tr>
            <tr>
                <td><span className="small">JUnitで闘うレガシーコード改善</span></td>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
                <td><span className="small">開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する</span></td>
                <td><span className="small">サービス開発の理想と現実・短納期でローンチした新サービスをJavaで開発した話</span></td>
            </tr>
            <tr>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
                <td><span className="small">休憩</span></td>
            </tr>
            <tr>
                <td><span className="small">JUnitで闘うレガシーコード改善</span></td>
                <td><span className="small">AWS Batch × Spring Batch でクラウド最適なバッチを構築した話</span></td>
                <td><span className="small">開発者にやさしく、柔軟性、安全性を高めたGithub ActionsベースのCI/CDを構築する</span></td>
                <td><span className="small">サービス開発の理想と現実・短納期でローンチした新サービスをJavaで開発した話</span></td>
            </tr>
            <tr>
                <td><span className="small">全セッション終了</span></td>
                <td><span className="small">全セッション終了</span></td>
                <td><span className="small">全セッション終了</span></td>
                <td><span className="small">クロージング</span></td>
            </tr>
            </tbody>
        </table>
    );
}

export default TimeTable;
