import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AnimatedList from './AnimatedList';

const Departments = () => {
  const navigate = useNavigate();
  const departmentList = [
    { name: 'Department of Computer Engineering', id: 'cse' },
    { name: 'Department of Electronics Engineering', id: 'ece' },
    { name: 'Department of Electrical Engineering', id: 'eee' },
    { name: 'Department of Mechanical Engineering', id: 'me' },
    { name: 'Department of Civil Engineering', id: 'ce' },
    { name: 'Department of Industrial Engineering', id: 'ie' },
    { name: 'Department of Manufacturing Engineering', id: 'mfe' },
    { name: 'Department of Mechatronics Engineering', id: 'mce' },
    { name: 'Department of Chemical Engineering', id: 'che' },
    { name: 'Department of Architecture', id: 'arch' },
  ];

  const items = departmentList.map(dept => dept.name);

  const handleItemSelect = (item, index) => {
    navigate(`/departments/${departmentList[index].id}`);
  };

  return (
    <Card className="shadow-sm bulsu-border">
      <Card.Header as="h2" className="text-center">Academic Departments</Card.Header>
      <Card.Body>
        <AnimatedList
          items={items}
          onItemSelect={handleItemSelect}
          showGradients
          enableArrowNavigation
          displayScrollbar
        />
      </Card.Body>
    </Card>
  );
};

export default Departments;
