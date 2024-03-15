import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Heading,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

const App = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <Box maxWidth="500px" mx="auto" mt="50px">
      <Heading fontSize="xx-large" fontWeight="500" textAlign="center">
        User Details
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.firstName} width="50%"
   marginLeft="30%">
     <div style={{ backgroundColor: "darkgray" }}></div>
     <div style={{ marginLeft: "20px" }}></div>
     <Heading fontSize="x-large" fontWeight={400} mt={5}>
              Basic Details
            </Heading>
             <div style={{ display: "flex", marginTop: "15px" }}>
             </div>
          <FormLabel>First Name:</FormLabel>
          <Input type="text" {...register('firstName', { required: 'This field is required' })} />
          <FormErrorMessage>{errors.firstName && typeof errors.firstName === 'object' && (errors.firstName as FieldError).message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.lastName} mb="4">
          <FormLabel>Last Name:</FormLabel>
          <Input type="text" {...register('lastName', { required: 'This field is required' })} />
          <FormErrorMessage>{errors.lastName && typeof errors.lastName === 'object' && (errors.lastName as FieldError).message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email} mb="4">
          <FormLabel>Email:</FormLabel>
          <Input type="email" {...register('email', { required: 'This field is required' })} />
          <FormErrorMessage>{errors.email && typeof errors.email === 'object' && (errors.email as FieldError).message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.phone} mb="4">
          <FormLabel>Phone No.:</FormLabel>
          <Input type="tel" {...register('phone', { required: 'This field is required' })} />
          <FormErrorMessage>{errors.phone && typeof errors.phone === 'object' && (errors.phone as FieldError).message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.gender} mb="4">
          <FormLabel>Gender:</FormLabel>
          <Select {...register('gender', { required: 'This field is required' })}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          <FormErrorMessage>{errors.gender && typeof errors.gender === 'object' && (errors.gender as FieldError).message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.dob} mb="4">
          <FormLabel>Date of Birth:</FormLabel>
          <Input type="text" {...register('dob', { required: 'This field is required' })} placeholder="dd/mm/yyyy" />
          <FormErrorMessage>{errors.dob && typeof errors.dob === 'object' && (errors.dob as FieldError).message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.techStacks} mb="4">
          <FormLabel>Tech Stack:</FormLabel>
          <Controller
            name="techStacks"
            control={control}
            defaultValue={['']}
            render={({ field: { onChange, value } }) => (
              <>
                {value.map((tech:any, index:any) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <Input
                      type="text"
                      value={tech}
                      onChange={(e) => {
                        const newTechStacks = [...value];
                        newTechStacks[index] = e.target.value;
                        onChange(newTechStacks);
                      }}
                      placeholder="Enter Tech Stack"
                    />
                    {index !== 0 && (
                      <Button type="button" variant="ghost" onClick={() => onChange(value.filter((_:any, i:any) => i !== index))}>
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" onClick={() => onChange([...value, ''])}>Add Tech Stack</Button>
              </>
            )}
          />
          {errors.techStacks && typeof errors.techStacks === 'object' && (errors.techStacks as FieldError).message}
        </FormControl>
        <Button type="submit" mt="4" colorScheme="blue">Submit</Button>
      </form>
    </Box>
  );
};

export default App;
