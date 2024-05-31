<script setup lang="ts">
import InputData from './components/pipeline/InputData.vue'
import Sidebar from './components/pipeline/Sidebar.vue'
import { playlists } from './components/pipeline/data/playlists'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './components/ui/tabs'
import { Separator } from './components/ui/separator'
import TableResults from './components/results/TableResults.vue'
import { Badge } from './components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
</script>

<template>
  <div class="hidden md:block">
    <div class="border-t">
      <div class="bg-background">
        <div class="grid lg:grid-cols-5">
          <Sidebar :playlists="playlists" class="hidden lg:block" />
          <div class="col-span-3 lg:col-span-4 lg:border-l">
            <div class="h-full px-4 py-6 lg:px-8">
              <Tabs default-value="data_input" class="h-full space-y-6">
                <div class="space-between flex items-center">
                  <TabsList>
                    <TabsTrigger value="data_input" class="relative">
                      Data Preparation
                    </TabsTrigger>
                    <TabsTrigger value="sp_prediction">
                      Signal Peptides (SignalP 6.0)
                    </TabsTrigger>
                    <TabsTrigger value="porperties_prediction">
                      Properties Prediction (PeptideBERT)
                    </TabsTrigger>
                    <TabsTrigger value="posing_prediction">
                      Posing Prediction (DiffDock)
                    </TabsTrigger>
                    <TabsTrigger value="generation">
                      Generation (ProtLlama3)
                    </TabsTrigger>
                  </TabsList>
                  
                </div>

                <TabsContent
                  value="data_input"
                  class="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        New Run for AMPs Prediction
                      </h2>
                      <p class="text-sm text-muted-foreground">
                       Upload your sequence data in .FASTA format, as many files as you want to process. For best results have them annotated using the <a class="underline underline-offset-4 font-bold decoration-foreground" href="https://www.ncbi.nlm.nih.gov/refseq/annotation_prok/">NCBI Prokaryotic Genome Annotation Pipeline</a>.
                      </p>
                    </div>
                  </div>
                  <Separator class="my-4" />
                  <InputData />
                </TabsContent>
                <TabsContent
                  value="sp_prediction"
                  class="border-none p-0 outline-none"
                >
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Signal Peptides Prediction
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Signal peptides are short peptides that direct the transport of proteins to the cell membrane. SignalP 6.0 is a deep learning model that predicts signal peptides in protein sequences.
                        <a variant="link" class="underline underline-offset-4 font-bold decoration-foreground" href="https://services.healthtech.dtu.dk/services/SignalP-6.0/">SignalP-6.0 Site</a>
                      </p>
                      <Badge>6,236 Proteins processed</Badge>
                    </div>
                  </div>
                  <Separator class="my-4" />
                  <TableResults />

             
                </TabsContent>

                <TabsContent
                  value="porperties_prediction"
                  class="border-none p-0 outline-none"
                >
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Properties Prediction for Selected Proteins
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        
                        
                        Transformer Based Language Model for Peptide Property prediction properties including hemolysis, solubility, and resistance to nonspecific interactions that achieve state of the art (SOTA). <a class="underline underline-offset-4 font-bold decoration-foreground" href="https://github.com/ChakradharG/PeptideBERT">PeptideBERT</a>
                      </p>
                      <Badge>3 Proteins processed</Badge>
                    </div>
                  </div>
                  <Separator class="my-4" />
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead class="w-[400px]">
                          Protein ID
                        </TableHead>
                        <TableHead>Hemolytic</TableHead>
                        <TableHead>Solubility</TableHead>
                        <TableHead>Nonfouling</TableHead>
                        <TableHead class="text-right">
                          Sequence
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell class="font-medium">
                          >WP_277335535.1 sortase [Streptomyces sp. JH34]

                        </TableCell>
                        <TableCell>1%</TableCell>
                        <TableCell>31%</TableCell>
                        <TableCell>0%</TableCell>
                        <TableCell class="text-right">
                          MRNTRIGAGICLAVVSLALAAPVAGAAAGPSGEQSIHISPAKASPGSQVTVSTRACGKETYGKGTSVAGGAFHLFAGDRE
                          GVLVGVFDIPAGTRPGTDTVTVKCPPRIKITDTYRIVERAPSGGVDAGFGAPTDQGTQLAAGSVLLAAAAAGGVVRLRRR
                          STGSRI
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell class="font-medium">
                          >WP_277330307.1 hypothetical protein [Streptomyces sp. JH34]

                        </TableCell>
                        <TableCell>4%</TableCell>
                        <TableCell>37%</TableCell>
                        <TableCell>0%</TableCell>
                        <TableCell class="text-right">
                          MKQKITSLAGAMALAGAVVIAAAAVATGQASEADHGQPVSAPAPHATTVFGYQLSESDLAAPLGEWGVGRRTPRA
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell class="font-medium">
                          >WP_277330348.1 spore-associated protein [Streptomyces sp. JH34]

                        </TableCell>
                        <TableCell>0%</TableCell>
                        <TableCell>45%</TableCell>
                        <TableCell>0%</TableCell>
                        <TableCell class="text-right">
                          MRTARNVAAVGAATALLVGGTAAFGATASAAPNVTPQGVCGKAYKTVNSVAVGSLGTVYLTYNSSNGRNCVTTIRTNPGS
                          AKPMSAYIYVPATDEWAGDDGNFTSYAGPGYVYGKGYCVSWGGSIANVYVSVENSNCAALKEQRTTEIR
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

             
                </TabsContent>
                
                <TabsContent
                  value="posing_prediction"
                  class="border-none p-0 outline-none"
                >
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                         Prediction of binding structure for selected proteins and ligands
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        
                        
                        Predicting the binding structure of a small molecule ligand to a protein using a diffusion generative model over the non-Euclidean manifold of ligand poses. <a class="underline underline-offset-4 font-bold decoration-foreground" href="https://github.com/gcorso/DiffDock/tree/main?tab=readme-ov-file">DiffDock</a>
                      </p>
                      <Badge>1 Protein and Ligand processed</Badge>
                    </div>
                  </div>
                  <Separator class="my-4" />
                  <iframe
                    src="http://192.168.1.112:7860/"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="w-full h-[900px]">
                  </iframe>

             
                </TabsContent>
            </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
