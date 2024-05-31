## Oddp: Open Drug Design Pipeline 

![Oddp](oddp.png)

The Open Drug Design Pipeline project leverages advanced AI models to re-think an AI first approach to the drug discovery process aming for a design rather than a discovery pipeline, specifically targeting Antimicrobial Peptides (AMPs). This pipeline integrates state-of-the-art models across various stages, from initial sequence prediction to final protein design.

## Base Models

| Model      | Description                                                               |
|------------|---------------------------------------------------------------------------|
| ProtTrans  | A general protein language model (T5EncoderModel) for understanding protein sequences. |
| DiffDock   | A diffusion generative model for molecular docking.                       |
| ProLLaMA   | A large language model designed for multi-task protein language processing. |

## Pipeline Models

| Model        | Description                                                                                                                 |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| SignalP 6.0  | Fine-tuned to predict all types of signal peptides from FASTA files, providing a classification probability for various pathways. |
| PeptideBERT  | A language model for peptide property prediction, including hemolysis, solubility, and non-fouling properties.              |
| DiffDock     | Used for docking curated signal peptides with ligands of interest, generating complex 3D structures with confidence scores. |
| ProLLaMA     | Generates novel proteins with specified functionalities based on user inputs.                                               |

## Training Datasets

| Dataset        | Description                                                            |
|----------------|------------------------------------------------------------------------|
| Unannotated protein sequences | Protein sequences across all domains of life.                    |
| DBAASPv3       | Antimicrobial peptide activities.                                      |
| PDBBind        | Databases for docking purposes.                                        |
| BindingMOAD    | Databases for docking purposes.                                        |

## Key Features

| Feature                                            | Description                                                                             |
|----------------------------------------------------|-----------------------------------------------------------------------------------------|
| Integration of multiple AI models                  | Streamlines the drug design process.                                                    |
| Utilization of large datasets                      | Ensures robust and accurate predictions.                                                |
| Capability to design novel proteins                | Tailored to specific functional requirements.                                           |
| Web UI to run batch inferece                       | Web UI to manage inference over workloads                                               |

This AI-driven pipeline aims to significantly accelerate and enhance the precision of drug discovery, offering a powerful tool for developing new antimicrobial treatments.

# Pipeline Models Fine-tuned for AMPs Discovery/Design

This pipeline incorporates foundational models such as ProtTrans, DiffDock, and ProLLaMA, each contributing unique capabilities to the drug design process. ProtTrans is a general protein language model designed for understanding and processing protein sequences. DiffDock is a diffusion generative model specialized in molecular docking, facilitating the prediction of protein-ligand interactions. ProLLaMA is a large language model tailored for multi-task protein language processing, capable of designing novel proteins with specific functionalities.

The AI First Drug Design Pipeline is structured into distinct steps, including signal peptide prediction, peptide property prediction, molecular docking, and de novo protein generation. Each step is fine-tuned to address specific aspects of AMP discovery and design, utilizing extensive datasets and advanced computational techniques to ensure high accuracy and efficiency

## Pipeline Step 1: Predict SPs List

| Field               | Details                                                                                                        |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| **Model**           | SignalP 6.0                                                                                                    |
| **Description**     | Fine-tuned to predict all types of signal peptides from a FASTA file                                           |
| **Architecture**    | Fine-tuned for multi-classification                                                                           |
| **Base Model**      | T5EncoderModel                                                                                                 |
| **Torch Version**   | torch==1.13.1                                                                                                  |
| **CUDA Version**    | 11.7                                                                                                           |
| **Training Dataset**| Millions of unannotated protein sequences across all domains of life.                                          |
| **Paper**           | [Nature Article](https://www.nature.com/articles/s41587-021-01156-3)                                           |
| **Input**           | Annotated FASTA file whole Genome e.g., Streptomyces JH010                                                     |
| **Output**          | Classification probability: Sec/SPI, Sec/SPII, Tat/SPI, Tat/SPII, Sec/SPIII (general secretory or twin-arginine translocation (Tat) pathway). An annotated list in CSV with results. |

## Pipeline Step 2: Predict SPs Properties

| Field               | Details                                                                                                        |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| **Model**           | PeptideBERT                                                                                                    |
| **Description**     | Language Model for Peptide Property Prediction                                                                 |
| **Architecture**    | Fine-tuned for classification                                                                                  |
| **Base Model**      | T5EncoderModel                                                                                                 |
| **Base Model**      | ProtTrans / ProtBERT                                                                                           |
| **Torch Version**   | torch==2.0.1                                                                                                   |
| **Transformers**    | transformers==4.31.0                                                                                           |
| **CUDA Version**    | 11.7                                                                                                           |
| **Training Dataset**| Database of Antimicrobial Activity and Structure of Peptides (DBAASPv3)                                        |
| **Hemolysis**       | 9,316 sequences (19.6% positive (hemolytic), 80.4% negative (non-hemolytic))                                   |
| **Solubility**      | 18,453 sequences (47.6% positive, 52.4% negative)                                                              |
| **Nonfouling**      | 3,600 sequences (20.9% positives, 79.1% negatives)                                                             |
| **Paper**           | [arXiv Article](https://arxiv.org/abs/2309.03099)                                                              |
| **Input**           | Amino Acid Sequence                                                                                            |
| **Output**          | Classification probability: Hemolysis, Solubility, Non-fouling                                                 |

## Pipeline Step 3: Use the Curated SPs with Any Ligand of Interest

| Field               | Details                                                                                                        |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| **Model**           | DiffDock                                                                                                       |
| **Description**     | Diffusion generative model                                                                                     |
| **Torch Version**   | torch==1.13.1                                                                                                  |
| **Python Version**  | python=3.9.18                                                                                                  |
| **CUDA Version**    | 11.7                                                                                                           |
| **Training Dataset**| PDBBind, BindingMOAD, DockGen, PoseBusters, van der Mers                                                       |
| **Paper**           | [arXiv Article](https://arxiv.org/abs/2210.01776)                                                              |
| **Input**           | Protein (.pdb), Ligand (SMILES string)                                                                         |
| **Output**          | Complex with 3D and confidence score                                                                           |

## Pipeline Step 4: De Novo Protein Generation

| Field               | Details                                                                                                        |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| **Model**           | ProLLaMA                                                                                                       |
| **Description**     | Design novel proteins with desired functionalities                                                             |
| **Architecture**    | LLM                                                                                                            |
| **Base Model**      | Meta LLama 2                                                                                                   |
| **Torch Version**   | torch==2.0.1                                                                                                   |
| **Transformers**    | transformers==4.35.0                                                                                           |
| **CUDA Version**    | 11.7                                                                                                           |
| **Paper**           | [arXiv Article](https://arxiv.org/abs/2402.16445)                                                              |
| **Input**           | Amino Acid Sequence                                                                                            |
| **Output**          | Generated proteins with specified functions based on the user's intent.                                        |

----

## Setup

### Requirements

### Installation

## Usage

### Web UI
### API
### Training Pipeline
### Models
### Data
