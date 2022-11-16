/* eslint-disable react/jsx-key */
import { Box } from "@chakra-ui/react";
import { ArrowCircleDown, ArrowCircleUp, Trash } from "phosphor-react";
import { ReturnFocus } from "../../../../components/modal";
import * as Styled from "./styles";

export const Table = ({ listPlan, onSubmit, onOpen, onClose, isOpen }: any) => {
	return (
		<Styled.Container>
			<Styled.DivContent>
				<Styled.ContainerTable>
					<Styled.DivMobile>
						<Styled.TableStyled>
							<Styled.HeaderTable>
								<Styled.Title></Styled.Title>
								<Styled.Title>Modalidade</Styled.Title>
								<Styled.Title>Titulo</Styled.Title>
								<Styled.Title>Data</Styled.Title>
								<Styled.Title>Valor (R$)</Styled.Title>
								<Styled.Title></Styled.Title>
							</Styled.HeaderTable>
							{listPlan.map((plan: any) => (
								<Styled.LineTable>
									<Styled.DataLine>
										<Box display="flex" alignContent="center" justifyContent="center">
											{ plan.kindLanch === "moneyDeposit" ? (
												<ArrowCircleUp color='#63ac84' size={35} />
											) : (
												<ArrowCircleDown color="#45254D" size={35} />
											)}
										</Box>
									</Styled.DataLine>
									<Styled.DataLine>{plan.kindLanch}</Styled.DataLine>
									<Styled.DataLine>{plan.title}</Styled.DataLine>
									<Styled.DataLine>{plan.date}</Styled.DataLine>
									<Styled.DataLine>{plan.moneyLanch}</Styled.DataLine>
									<Styled.DataLine>
										<ReturnFocus
											title="Excluir Item"
											text={`Deseja excluir o item: ${plan.title}`}
											onSubmit={() => onSubmit(plan.id)}
											onOpen={onOpen}
											onClose={onClose}
											isOpen={isOpen}
										>
											<Trash size={30} />
										</ReturnFocus>
									</Styled.DataLine>
								</Styled.LineTable>
							))}
						</Styled.TableStyled>
					</Styled.DivMobile>
				</Styled.ContainerTable>
			</Styled.DivContent>
		</Styled.Container>
	);
};