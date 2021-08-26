const getMaxSalary = shifts => {
  let maxSalary = 0;
  shifts.forEach(shift => {
    const salary = shift.hourly_pay_in_eur * shift.number_of_hours;
    maxSalary = salary > maxSalary ? salary : maxSalary;
  });
  return maxSalary;
};

export default getMaxSalary;
