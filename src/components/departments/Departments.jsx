import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'react-feather';
import styles from './Departments.module.css';

const Departments = () => {
  const departmentList = [
    { name: 'Department of Computer Engineering', id: 'cse' },
    { name: 'Department of Electronics Engineering', id: 'ece' },
    { name: 'Department of Electrical Engineering', id: 'eee' },
    { name: 'Department of Mechanical Engineering', id: 'me' },
    { name: 'Department of Civil Engineering', id: 'ce' },
    { name: 'Department of Industrial Engineering', id: 'ie' },
    { name: 'Department of Chemical Engineering', id: 'che' },
    { name: 'Department of Architecture', id: 'arch' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Stagger delay
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="container">
      <div className={styles.departmentsContainer}>
        <h2 className={styles.title}>Academic Departments</h2>
        <div className={styles.grid}>
          {departmentList.map((dept, i) => (
            <motion.button
              key={dept.id}
              className={styles.departmentItem}
              onClick={() => alert(`Navigating to ${dept.name}`)}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <Briefcase className={styles.icon} size={20} />
              <span>{dept.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
