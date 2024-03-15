import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Heading,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

const App = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <Heading fontSize="xx-large" fontWeight="500" textAlign="center">User Details</Heading>
      </div>

      <div style={{ backgroundColor: "darkgray", width: '30%', marginLeft: '35%' }}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '15px' }}>
          <Heading fontSize="x-large" >
            Basic Details
          </Heading>
          <div >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <FormControl
                isInvalid={!!errors.firstName}

              >

                <div className="2">



                  <div>

                    <FormLabel>First Name:</FormLabel>
                  </div>
                  <div>
                    <Input
                      type="text"
                      {...register("firstName", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div>
                    <FormErrorMessage>
                      {errors.firstName &&
                        typeof errors.firstName === "object" &&
                        (errors.firstName as FieldError).message}
                    </FormErrorMessage>
                  </div>
                </div>

              </FormControl>
              <div>
                <FormControl isInvalid={!!errors.lastName} mb="4">
                  <div style={{ marginRight: '3rem' }}>
                    <div>
                      {" "}
                      <FormLabel>Last Name:</FormLabel>
                    </div>
                    <div>
                      <Input
                        type="text"
                        {...register("lastName", {
                          required: "This field is required",
                        })}
                      />
                    </div>

                    <div>
                      <FormErrorMessage>
                        {errors.lastName &&
                          typeof errors.lastName === "object" &&
                          (errors.lastName as FieldError).message}
                      </FormErrorMessage>
                    </div>
                  </div>
                </FormControl>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div>
                <FormControl isInvalid={!!errors.email} mb="4">

                  <div>
                    <div>
                      {" "}
                      <FormLabel>Email:</FormLabel>
                    </div>
                    <div>
                      {" "}
                      <Input
                        type="email"
                        {...register("email", {
                          required: "This field is required",
                        })}
                      />
                    </div>

                    <div>
                      <FormErrorMessage>
                        {errors.email &&
                          typeof errors.email === "object" &&
                          (errors.email as FieldError).message}
                      </FormErrorMessage>
                    </div>
                  </div>
                </FormControl>
              </div>
              <div style={{ marginRight: '3rem' }}>
                <FormControl isInvalid={!!errors.phone} mb="4">
                  <div>
                    <div>
                      {" "}
                      <FormLabel>Phone No.:</FormLabel>
                    </div>
                    <div>
                      <Input
                        type="tel"
                        {...register("phone", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div>
                      {" "}
                      <FormErrorMessage>
                        {errors.phone &&
                          typeof errors.phone === "object" &&
                          (errors.phone as FieldError).message}
                      </FormErrorMessage>
                    </div>
                  </div>
                </FormControl>
              </div>
            </div>
          </div>
          <div>
            <Heading fontSize="xx-large" fontWeight="500" >Other Information</Heading>
          </div>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div>
                <FormControl isInvalid={!!errors.gender} mb="4">
                  <div>
                    <div>
                      <FormLabel>Gender:</FormLabel>
                    </div>
                    <div>
                      <Select
                        {...register("gender", {
                          required: "This field is required",
                        })}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>
                    <div>
                      <FormErrorMessage>
                        {errors.gender &&
                          typeof errors.gender === "object" &&
                          (errors.gender as FieldError).message}
                      </FormErrorMessage>
                    </div>
                  </div>
                </FormControl>
              </div>
              <div style={{ marginRight: '3rem' }}>
                <FormControl isInvalid={!!errors.dob} mb="4">
                  <div>
                    <div>
                      {" "}
                      <FormLabel>Date of Birth:</FormLabel>
                    </div>
                    <div>
                      {" "}
                      <Input
                        type="text"
                        {...register("dob", { required: "This field is required" })}
                        placeholder="dd/mm/yyyy"
                      />
                    </div>
                    <div>
                      {" "}
                      <FormErrorMessage>
                        {errors.dob &&
                          typeof errors.dob === "object" &&
                          (errors.dob as FieldError).message}
                      </FormErrorMessage>
                    </div>
                  </div>
                </FormControl>
              </div>
            </div>
            <FormControl isInvalid={!!errors.techStacks} mb="4">
              <div>
                {" "}
                <FormLabel>Tech Stack:</FormLabel>
              </div>

              <Controller
                name="techStacks"
                control={control}
                defaultValue={[""]}
                render={({ field: { onChange, value } }) => (
                  <>
                    {value.map((tech: any, index: any) => (
                      <div key={index} style={{ marginBottom: "10px" }}>
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
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() =>
                              onChange(
                                value.filter((_: any, i: any) => i !== index)
                              )
                            }
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      onClick={() => onChange([...value, ""])}
                    >
                      Add Tech Stack
                    </Button>
                  </>
                )}
              />
              {errors.techStacks &&
                typeof errors.techStacks === "object" &&
                (errors.techStacks as FieldError).message}
            </FormControl>
          </div>
          <Button type="submit" mt="4" colorScheme="blue">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default App;
