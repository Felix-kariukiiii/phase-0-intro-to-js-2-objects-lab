let employee = {
    name: "Sam", 
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    let clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
