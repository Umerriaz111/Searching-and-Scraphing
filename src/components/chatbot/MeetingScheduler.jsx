import React from 'react';

const MeetingScheduler = () => {
  return (
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/lawrence-67/check-in"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
};

export default MeetingScheduler;
