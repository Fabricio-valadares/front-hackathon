import {
	Box,
	Grid,
	Heading,
	Button,
	useRadioGroup,
	HStack,
	Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GridBase from "../../../components/GridBase";
import RadioCard from "../../../components/RadioGroup";
import { serializeDataQuestion } from "../../../helpers/serializeDataQuestion";
import { OptionsData } from "../screenInitial/types";

const QuestionFive = () => {
	window.addEventListener("load", () => {
		nagigate("/onboarding/screen-initial");
	});

	const nagigate = useNavigate();
	const location = useLocation();

	const [messageFiledRequired, setMessageFiledRequired] = useState(false);
	const [checkValue, setCheckValue] = useState(false);
	const [result, setResult] = useState("");

	const handleSubmit = () => {
	  console.log("#######", {...location.state, emergencyReserve: serializeDataQuestion(result, "Não")});

	  if (checkValue) {
			nagigate("/");
			return;
	  }

	  setMessageFiledRequired(true);
	};

	const options: OptionsData[] = [
		{id: "A", value: "Sim, já tenho", },
		{id: "B", value: "Não, ainda não tenho"}
	];

	const { getRootProps, getRadioProps } = useRadioGroup({
	  name: "framework",
	  defaultValue: "react",
	  onChange: onChangeRadio,
	});

	function onChangeRadio(props: string) {
	  setResult(props);

	  setCheckValue(true);
	  setMessageFiledRequired(false);
	}

	return (
	  <GridBase title='Perfil completo ou simples?'>
			<Box paddingBottom='40px'>
		  	<Heading marginBottom='10px' as='h5'>Você tem uma reserva de emergência?</Heading>
			</Box>

			<Box>
				<HStack {...getRootProps()}>
					<Grid
						display='flex'
						flexDirection='column'
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						{options.map(({ id, value }) => {
							const radio = getRadioProps({ value });
							return (
								<RadioCard key={value} {...radio}>
									{`${id} - ${value}`}
								</RadioCard>
							);
						})}
					</Grid>
				</HStack>
				{
					messageFiledRequired && <Text>E obrigatório escolher algum campo!</Text>
				}
			</Box>

			<Grid paddingTop='20px' w="100%">
				<Box>
					<Button onClick={() => handleSubmit()} w="120px" type='button' color='white' bg='#591C66'>Continuar</Button>
				</Box>
			</Grid>
	  </GridBase>
	);
};

export default QuestionFive;
