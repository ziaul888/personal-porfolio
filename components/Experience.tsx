"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import useSectionView from "@/lib/custom_hook/useSectionInView";

const Experience = () => {
    const { ref } = useSectionView("Experience", 0.75);

    return (
        <section id="experience" ref={ref} className="scroll-mt-28">
            <SectionHeader>
                Experiences
            </SectionHeader>
            <VerticalTimeline>
                {/*{experiencesData?.map((items,index) =>(*/}
                {/*    <React.Fragment>*/}

                {/*    </React.Fragment>*/}
                {/*))}*/}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;
