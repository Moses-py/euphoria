"use client";

import { Timeline } from "flowbite-react";

export default function OrderTimeline() {
  return (
    <Timeline horizontal className="flex w-full justify-between">
      <Timeline.Item className="w-full">
        <div className="flex items-center w-full">
          <div className="h-4 w-4 bg-secondary rounded-full" />
          <div className="flex w-full bg-secondary h-1"></div>
        </div>
        <Timeline.Content>
          <Timeline.Body className="text-xs font-sans">
            Order placed
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className="w-full">
        <div className="flex items-center w-full">
          <div className="h-4 w-4 bg-secondary rounded-full" />
          <div className="flex w-full bg-gray-2 h-1"></div>
        </div>
        <Timeline.Content>
          <Timeline.Body className="text-xs font-sans">
            In progress
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className="w-full">
        <div className="flex items-center w-full">
          <div className="h-4 w-4 bg-gray-2 rounded-full" />
          <div className="flex w-full bg-gray-2 h-1"></div>
        </div>
        <Timeline.Content>
          <Timeline.Body className="text-xs font-sans">Shippped</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <div className="h-4 w-4 bg-gray-2 rounded-full" />

        <Timeline.Content>
          <Timeline.Body className="text-xs font-sans">Delivered</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
