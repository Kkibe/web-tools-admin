
import React, { useState } from "react";
import {
    Button, Flex, Box, Input, Radio,
    RadioGroup, Checkbox, Text, Textarea,
    Select, Tooltip, FormControl, FormLabel,
    Stack,
    Switch,
    Heading,
    ButtonGroup,
    Container,
    Img,
} from "@chakra-ui/react";
import { FaChrome, FaEdge, FaFileUpload, FaFirefox, FaImage } from "react-icons/fa";
 
import Image from '../assets/icon.png';

const Publish = () => {
    const [featuredImage1, setFeaturedImage1] = useState(null);


    const [formData, setFormData] = useState({
        firstName: "",
        emailAddress: "",
        gender: "female",
        languages: [],
        nationality: "",
        address: "",
    });

    const [data, setData] = useState({
        title: "",
        description: "",
        userFeedbackEnabled: false,
        platforms: ["chrome"],
        category: "",
        icon: "",
        featureGraphics: '',
    });
 
    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };
 
    const handleLanguageCheckboxChange =
        (language) => {
            const languages =
                formData.languages.includes(language)
                    ? formData.languages
                        .filter((lang) => lang !== language)
                    : [...formData.languages, language];
 
            setFormData({
                ...formData,
                languages,
            });
        };
 
    const handleSubmit =
        () => {
            console.log("Form Submitted:", formData);
 
            alert("Form submitted successfully!");
            setFormData({
                firstName: "",
                emailAddress: "",
                gender: "female",
                languages: [],
                nationality: "",
                address: "",
            });
        };
 
    return (
        <Box w="100vw">
            <Flex justifyContent="center">
                <Flex
                    direction="column"
                    alignItems="center"
                    w={{ base: "99%", md: "90%", lg: "80%" }}>
                    <Heading as="h2" fontWeight="bold">
                        Publish an extension to web store
                    </Heading>
                    <FormControl isRequired margin={3}>
                        <FormLabel>Short Title (max: 13)</FormLabel>
                        <Input placeholder="Short Title"/>
                    </FormControl>
                    <FormControl isRequired margin={3}>
                        <FormLabel>Description (max: 132)</FormLabel>
                        <Textarea placeholder="Write a descriptive text"/>
                    </FormControl>
                    <FormControl margin={5}>
                      <Flex>
                        <Switch checked={true} colorScheme='green'/>
                        <FormLabel >User can give feedback?</FormLabel>
                      
                      </Flex>
                    </FormControl>
                    <FormControl margin={3}>
                        <FormLabel>When do you want to publish?</FormLabel>
                        <RadioGroup
                            defaultValue={formData.gender}
                            onChange={
                                (value) =>
                                    handleInputChange("gender", value)
                            }>
                            <Stack spacing={5} direction="row">
                                <Radio  value="now">
                                    Now
                                </Radio>
                                <Radio colorScheme="green" value="2">
                                    After 2 hours
                                </Radio>
                                
                                <Radio colorScheme="green" value="8">
                                    After 8 hours
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl margin={3} isRequired>
                        <FormLabel>Choose Platform:</FormLabel>
                        <Stack spacing={3} direction="row">
                            <Checkbox onChange={
                                (value) =>
                                    setData("platforms", () => {
                                        value && data.platforms.push("chrome");
                                        console.log(data.platforms)
                                    })
                            }>Chrome </Checkbox>
                            <Checkbox onChange={
                                (value) =>
                                    setData("platforms", () => {
                                        value && data.platforms.push("firefox");
                                        console.log(data.platforms)
                                    })
                            }> Firefox</Checkbox>
                            <Checkbox onChange={
                                (value) => {
                                    if(value){
                                        setData("platforms", ...data.platforms, "edge")
                                        console.log(data.platforms)
                                    } else {
                                        //setData("platforms", )
                                    }

                            }}>Edge</Checkbox>
                        </Stack>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Select category</FormLabel>
                        <Select
                            defaultValue={"now"}
                            placeholder="Select option"
                            onChange={
                                (e) =>
                                    handleInputChange("nationality",
                                                      e.target.value)
                            }>
                            <option value="Art & Design" >
                              Art & Design
                            </option>
                            <option value="Tools">
                              Tools
                            </option>
                            <option value="Developer tools">
                              Developer tools
                            </option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired margin={3}>
                        <FormLabel>Icon</FormLabel>
                        <Flex padding={1} width='260px' height='260px'  border={"1px solid grey"} display='flex' alignItems='center' justifyContent='center' flexDirection='column' position='relative'>
                            <Button><FaFileUpload /></Button>
                            <Text textAlign='center'>Click here to browse or drag & drop to upload.</Text>
                            <Input type='file' width={'100%'} height='100%' position='absolute' zIndex={3} opacity={0} cursor='pointer'/>
                        </Flex>
                    </FormControl>
                    <FormControl isRequired margin={1}>
                        <FormLabel>Feature Graphics</FormLabel>
                        <Flex display='flex' width='100%' alignItems='center' justifyContent='space-between' flexWrap={'wrap'} gap={"5px"}>
                        <Flex padding={1} width='100%' maxWidth={"250px"} height='250px'  border={"1px solid grey"} display='flex' alignItems='center' justifyContent='center' flexDirection='column' position='relative'>
                            <Button><FaFileUpload /></Button>
                            <Text>Add First Image</Text>
                            <Input type='file' width='100%'  height='100%' position='absolute' zIndex={3} opacity={0} cursor='pointer'/>
                            <Img src={Image}  width='100%'  height='100%' position='absolute' zIndex={2} />
                        </Flex>
                        <Flex padding={1} maxWidth={"250px"} width='100%' height='250px'  border={"1px solid grey"} display='flex' alignItems='center' justifyContent='center' flexDirection='column' position='relative'>
                            <Button><FaFileUpload /></Button>
                            <Text>Add Second Image</Text>
                            <Input type='file' width='100%' height='100%' position='absolute' zIndex={3} opacity={0} cursor='pointer'  onChange={(e) => {
                                setFeaturedImage1(e.target.files[0])
                                console.log(featuredImage1)
                            }}/>
                            {featuredImage1 && <Img src={featuredImage1 && featuredImage1}  width='100%'  height='100%' position='absolute' zIndex={2} />}
                        </Flex>
                        <Flex padding={1} maxWidth={"250px"} width='100%' height='250px'  border={"1px solid grey"} display='flex' alignItems='center' justifyContent='center' flexDirection='column' position='relative'>
                            <Button><FaFileUpload /></Button>
                            <Text>Add Third Image</Text>
                            <Input type='file' width='100%' maxWidth={"260px"} height='100%' position='absolute' zIndex={3} opacity={0} cursor='pointer'/>
                        </Flex>
                        </Flex>
                    </FormControl>
                    
                    <ButtonGroup spacing={4} margin={5}>
                      <Button
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        size="md"
                        onClick={handleSubmit}
                      >
                        Publish
                      </Button>

                      <Button
                        variantColor="teal"
                        variant="outline"
                      >
                        Save draft
                      </Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Box>
    );
};
 
export default Publish;