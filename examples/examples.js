// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const EXAMPLE_LIST = [
  {
    id: "0b41d10e-36e5-4e97-95c2-27726dd94f33",
    name: "COVID-19 Chest X-ray Dataset",
    author: "ieee8023",
    type: "data",
    dataType: "github",
    dataUrl:
      "https://github.com/ieee8023/covid-chestxray-dataset/archive/master.zip",
    categories: "COVID-19",
    tags: ["open source dataset"],
    summary: "Dataset of COVID-19 X-ray and CT images on GitHub",
    protocol: "covid_chestxray_dataset.yaml",
    description: "covid_chestxray_dataset.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-20T04:52:48.289Z",
    updatedAt: "2020-09-20T04:52:48.289Z",
  },
  {
    id: "e284b120-fdaf-11ea-adc1-0242ac120002",
    name: "COVID-19 Chest X-ray Diagnosis Model Training Job Template",
    author: "mlmed",
    type: "template",
    categories: "COVID-19",
    tags: ["official example"],
    summary: "Covid chestxray model training job",
    protocol: "covid_chestxray_training.yaml",
    description: "covid_chestxray_training.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-20T04:52:48.289Z",
    updatedAt: "2020-09-20T04:52:48.289Z",
  },
  {
    id: "1",
    name: "Couplet Dataset",
    author: "OpenPAI",
    type: "data",
    dataType: "blob",
    dataUrl:
      "https://openpaimarketplace.blob.core.windows.net/marketplace/Couplet_data/couplet_data.tgz",
    categories: "AI couplet",
    tags: ["official example"],
    summary: "Dataset of couplet",
    protocol: "couplet_dataset.yaml",
    description: "couplet_dataset.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "2",
    name: "Couplet Training Job Template",
    author: "OpenPAI",
    type: "template",
    categories: "AI couplet",
    tags: ["official example"],
    summary: "Couplet model training job",
    protocol: "couplet_training.yaml",
    description: "couplet_training.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "3",
    name: "Couplet Inference Job Template",
    author: "OpenPAI",
    type: "template",
    categories: "AI couplet",
    tags: ["official example"],
    summary: "Couplet inference service with trained model",
    protocol: "couplet_inference.yaml",
    description: "couplet_inference.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "4",
    name: "COVID-19 Outbreak Statistics Dataset",
    author: "OpenPAI",
    type: "data",
    dataType: "blob",
    dataUrl:
      "https://openpaimarketplace.blob.core.windows.net/marketplace/Covid19_data/covid-19_data.json",
    categories: "COVID-19",
    tags: ["official example"],
    summary:
      "Provides up-to-date data about Coronavirus outbreak, including numbers about confirmed cases, deaths and recovered",
    protocol: "covid_dataset.yaml",
    description: "covid_dataset.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "5",
    name: "COVID-19 Prediction Model Training Job Template",
    author: "OpenPAI",
    type: "template",
    categories: "COVID-19",
    tags: ["official example"],
    summary:
      "This model predicts the confirmed and death number of population of different dates",
    protocol: "covid_training.yaml",
    description: "covid_training.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "6",
    name: "COVID-19 Inference Service Job Template",
    author: "OpenPAI",
    type: "template",
    categories: "COVID-19",
    tags: ["official example"],
    summary:
      "This is the inference service to visualize the prediction number of confirmed and death population in different countries",
    protocol: "covid_inference.yaml",
    description: "covid_inference.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "7",
    name: "Grammar Check Dataset",
    author: "OpenPAI",
    type: "data",
    dataType: "blob",
    dataUrl:
      "https://openpaimarketplace.blob.core.windows.net/marketplace/GrammarCheck/gramarCheck_data.tgz",
    categories: "NLP",
    tags: ["official example"],
    summary: "Dataset for grammar check task",
    protocol: "grammar_check_dataset.yaml",
    description: "grammar_check_dataset.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "8",
    name: "Grammar Check Model Training Job Template",
    author: "OpenPAI",
    type: "template",
    categories: "NLP",
    tags: ["official example"],
    summary: "A grammar check model training process",
    protocol: "grammar_check_training.yaml",
    description: "grammar_check_training.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "9",
    name: "Grammar Check Inference Job Template",
    author: "OpenPAI",
    type: "template",
    categories: "NLP",
    tags: ["official example"],
    summary: "Grammar check inference job with trained model",
    protocol: "grammar_check_inference.yaml",
    description: "grammar_check_inference.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "10",
    name: "GPU Sharing Job Template",
    author: "OpenPAI",
    type: "template",
    categories: "gpu sharing",
    tags: ["official example"],
    summary: "GPU sharing example: two tasks share one GPU",
    protocol: "gpu_sharing.yaml",
    description: "gpu_sharing.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-22T04:52:48.289Z",
    updatedAt: "2020-09-22T04:52:48.289Z",
  },
  {
    id: "69ff3c37-1405-49a7-b9de-47e640ba490c",
    name: "Caffe2 Minist Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A caffe minist example",
    protocol: "caffe-mnist.yaml",
    description: "caffe-mnist.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "9d3fbdad-dd82-429c-a368-f3d7b41717b5",
    name: "Caffe2 ResNet50 Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A caffe resnet50 example",
    protocol: "caffe2-resnet50.yaml",
    description: "caffe2-resnet50.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "5fa59045-c3f8-4243-88ff-89a1034681d8",
    name: "Chainer CIFAR Image Classification Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A chainer example",
    protocol: "chainer-cifar.yaml",
    description: "chainer-cifar.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "d5f357d0-70cc-435c-92f2-21d63c7a1513",
    name: "Horovod PyTorch Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A horovod pytorch example",
    protocol: "horovod-pytorch-synthetic-benchmark.yaml",
    description: "horovod-pytorch-synthetic-benchmark.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "55a21b76-abbe-4f75-9b09-ed0ee3accc16",
    name: "Keras Tensorflow Backend MNIST Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A keras tensorflow minist example",
    protocol: "keras-tensorflow-mnist.yaml",
    description: "keras-tensorflow-mnist.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "56a0d871-fe2d-43ce-b26c-b89b9c0646fd",
    name: "MXNet Auto Encoder Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Mxnet Autoencoder Example",
    protocol: "mxnet-autoencoder.yaml",
    description: "mxnet-autoencoder.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "cc42d399-06d8-4b93-9e84-e5f609ef0c73",
    name: "PyTorch MNIST Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Pytorch Mnist Example",
    protocol: "pytorch-mnist.yaml",
    description: "pytorch-mnist.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "1c7efdef-40da-46d0-bdea-16c25e560380",
    name: "PyTorch Regression Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Pytorch Regression Example",
    protocol: "pytorch-regression.yaml",
    description: "pytorch-regression.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "80cf9714-de4e-480b-8e26-66f529dbff6d",
    name: "ROCm PyTorch MNIST Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Rocm Pytorch Example",
    protocol: "rocm-pytorch-mnist.yaml",
    description: "rocm-pytorch-mnist.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "44cbad87-c2d5-4433-9890-0883f07e3912",
    name: "ROCm Tensorflow2 Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Rocm Tensorflow2 Example",
    protocol: "rocm-tensorflow2.yaml",
    description: "rocm-tensorflow2.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "17c2500d-94ed-4e2d-af74-e1ace47987af",
    name: "Scikit-learn Text Vectorizer Speed Benchmark Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Scikit-learn Example",
    protocol: "sklearn-text-vectorizers.yaml",
    description: "sklearn-text-vectorizers.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "4fb02608-3769-475c-a0c2-c2155fb03c4f",
    name: "TensorFlow Distributed Training on CIFAR-10 Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Tensorflow Distributed Example",
    protocol: "tensorflow-cifar10.yaml",
    description: "tensorflow-cifar10.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-07-28T04:52:48.289Z",
    updatedAt: "2020-07-28T04:52:48.289Z",
  },
  {
    id: "74c8ab09-6225-4982-8145-5be0b5c55a28",
    name: "TensorFlow MNIST Digit Recognition Model Serving Job Template",
    author: "OpenPAI",
    type: "old",
    categories: ["official example"],
    tags: ["official example"],
    summary: "A Tensorflow Mnist Model Example",
    protocol: "tensorflow-serving-mnist.yaml",
    description: "tensorflow-serving-mnist.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-08-15T04:52:48.289Z",
    updatedAt: "2020-08-15T04:52:48.289Z",
  },
  {
    id: "11",
    name: "PyTorch DDP Job Template (Gloo backend)",
    author: "OpenPAI",
    type: "template",
    categories: ["distributed example"],
    tags: ["official example"],
    summary: "Pytorch Cifar10 Example",
    protocol: "Pytorch-cifar10-DDP-gloo.yaml",
    description: "Pytorch-cifar10-DDP-gloo.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-23T14:52:48.289Z",
    updatedAt: "2020-09-23T14:52:48.289Z",
  },
  {
    id: "12",
    name: "PyTorch DDP Job Template With Apex (Gloo backend)",
    author: "OpenPAI",
    type: "template",
    categories: ["distributed example"],
    tags: ["official example"],
    summary: "Pytorch Cifar10 Example",
    protocol: "Pytorch-Apex-cifar10-DDP-gloo.yaml",
    description: "Pytorch-Apex-cifar10-DDP-gloo.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-23T14:52:48.289Z",
    updatedAt: "2020-09-23T14:52:48.289Z",
  },
  {
    id: "13",
    name: "PyTorch DDP Job Template (NCCL backend)",
    author: "OpenPAI",
    type: "template",
    categories: ["distributed example"],
    tags: ["official example"],
    summary: "Pytorch Cifar10 Example",
    protocol: "Pytorch-cifar10-DDP-nccl.yaml",
    description: "Pytorch-cifar10-DDP-nccl.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-23T14:52:48.289Z",
    updatedAt: "2020-09-23T14:52:48.289Z",
  },
  {
    id: "14",
    name: "PyTorch DDP Job Template With Apex (NCCL backend)",
    author: "OpenPAI",
    type: "template",
    categories: ["distributed example"],
    tags: ["official example"],
    summary: "Pytorch Cifar10 Example",
    protocol: "Pytorch-Apex-cifar10-DDP-nccl.yaml",
    description: "Pytorch-Apex-cifar10-DDP-nccl.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-23T14:52:48.289Z",
    updatedAt: "2020-09-23T14:52:48.289Z",
  },
  {
    id: "15",
    name: "CIFAR-10 Single Node DP Job Template",
    author: "OpenPAI",
    type: "template",
    categories: ["distributed example"],
    tags: ["official example"],
    summary: "Pytorch Cifar10 Example",
    protocol: "Pytorch-cifar10-SingleNode-DP-GPUCPU.yaml",
    description: "Pytorch-cifar10-SingleNode-DP-GPUCPU.md",
    useNumber: 0,
    starNumber: 0,
    status: "approved",
    createdAt: "2020-09-23T14:52:48.289Z",
    updatedAt: "2020-09-23T14:52:48.289Z",
  },
];

module.exports = { EXAMPLE_LIST };
