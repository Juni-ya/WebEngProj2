import React from 'react';
import TiltedCard from './TiltedCard';

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const TeamMemberSection = ({ members, title, subtitle }) => {
  return (
    <section className="py-4">
      <div className="text-center mb-4">
        <h2 className="h4 mb-1">{title || 'Faculty'}</h2>
        {subtitle && <div className="text-muted">{subtitle}</div>}
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {members.map((member, idx) => (
          <div key={member.name} className="d-flex flex-column align-items-center" style={{width: '220px'}}>
            <TiltedCard
              imageSrc={member.imageUrl || `https://placehold.co/300x300/E2E8F0/4A5568?text=${getInitials(member.name)}`}
              altText={member.name}
              captionText={''}
              containerHeight="220px"
              containerWidth="220px"
              imageHeight="220px"
              imageWidth="220px"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
            <div className="mt-2 text-center">
              <div style={{fontWeight: 600, fontSize: '1rem'}}>{member.name}</div>
              <div style={{fontSize: '0.95rem', color: '#666'}}>{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMemberSection;
