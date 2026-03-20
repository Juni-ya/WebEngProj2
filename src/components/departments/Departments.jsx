import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AnimatedList from './AnimatedList';

import { departmentData } from './departmentData';

const Departments = () => {
  const navigate = useNavigate();
  const departmentList = Object.keys(departmentData)
    .filter(id => departmentData[id].faculty.length > 0)
    .map(id => ({
      name: departmentData[id].name,
      id: id,
    }));

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
