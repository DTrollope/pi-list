import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Tabs from '../components/common/Tabs';
import VideoAnalysis from './video/VideoAnalysis';
import Summary from './video/Summary';
import CbufferAnalysis from './video/CbufferAnalysis';
import VrxAnalysis from './video/VrxAnalysis';
import TvdAnalysis from './video/TvdAnalysis';
import VideoExplorer from './video/VideoExplorer';
import PerFrameAnalysisViewer from './video/PerFrameAnalysisViewer';
import RtpAnalysisViewer from './video/RtpAnalysisViewer';

const TABS = [
    Summary,
    VideoAnalysis,
    VideoExplorer,
    CbufferAnalysis,
    VrxAnalysis,
    TvdAnalysis,
    RtpAnalysisViewer,
    PerFrameAnalysisViewer,
];

const VideoPage = props => {
    const [tabIndex, setTabIndex] = useState(0);

    const CurrentTabComponent = TABS[tabIndex];

    return (
        <div className="lst-stream-info-tab lst-full-height">
            <Tabs
                headers={[
                    {
                        label: 'Summary',
                        icon: 'info',
                    },
                    {
                        label: 'Analysis',
                        icon: 'assignment',
                    },
                    {
                        label: 'Stream Explorer',
                        icon: 'view module',
                    },
                    {
                        label: 'Cinst',
                        icon: 'timeline',
                    },
                    {
                        label: 'Vrx',
                        icon: 'timeline',
                    },
                    {
                        label: 'Tvd',
                        icon: 'timeline',
                    },
                    {
                        label: 'RTP',
                        icon: 'timeline',
                    },
                    {
                        label: 'Per-frame',
                        icon: 'timeline',
                    },
                ]}
                onTabChange={setTabIndex}
            >
                <Scrollbars>
                    <CurrentTabComponent {...props} />
                </Scrollbars>
            </Tabs>
        </div>
    );
};

export default VideoPage;
