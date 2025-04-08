# Ancient Egyptian Hieroglyphic Datasets

The study of ancient languages, particularly Ancient Egyptian, faces a significant challenge due to the limited availability of annotated datasets. Despite the vast number of Ancient Egyptian artifacts bearing hieroglyphic inscriptions, this rich textual heritage has largely remained inaccessible to researchers in a structured digital format. Recognizing that data availability is fundamental to advancing research in this area [20], our project has undertaken the crucial task of collecting and annotating several unique datasets, which we are committed to making publicly available [21].

This document introduces the three distinct datasets developed and utilized in this research to train and evaluate the modules of our “LASC” approach: Layout Analysis, Signs Segmentation, and Signs Classification. Each dataset is described in detail below.

## A. Hieroglyphic Layout Analysis (HLA) Dataset

**Overview:** The Hieroglyphic Layout Analysis (HLA) Dataset is a unique resource comprising **883 high-resolution images**, each containing multiple lines of Ancient Egyptian hieroglyphs and cartouches. This dataset is specifically designed for tasks related to identifying and segmenting the layout of hieroglyphic texts within artifact images.

**Data Collection:** The HLA Dataset was meticulously compiled from diverse sources:

* **Direct Collection (Egyptian Museum in Cairo, Egypt) [22]:** During on-site visits, we captured **230 high-resolution images** of various artifacts, including Pharaonic coffins, statues, and wall inscriptions housed in the Egyptian Museum in Cairo.
* **Online Museum Repositories:** We leveraged the growing trend of museums providing open access to their collections, gathering over **300 images** from **The Metropolitan Museum of Art (“The Met”), New York, USA [23]**. The Met’s extensive collection spans approximately 30,000 objects of artistic, historical, and cultural significance, dating from around 300,000 BCE to the 4th century CE.
* **Museo Egizio, Turin, Italy [24]:** We also collected more than **200 images** from the **Egyptian Museum in Turin (“Museo Egizio”)**, which has made over 4,000 of its approximately 40,000 objects accessible online.
* **Specific Archaeological Sites:** The dataset includes **18 images** of the wall inscriptions within the **Unas pyramid in Giza, Egypt [25]**, known for their dense concentration of hieroglyphic signs.
* **Additional Online Resources:** Further images were sourced from the online collections of:
    * The French Institute for Oriental Archaeology (IFAO) in Cairo
    * The Rosicrucian Egyptian Museum (REM), USA
    * The British Museum, UK
    * The Museum of Fine Arts in Boston, USA
    * The Louvre Museum in Paris
    * The Egyptian Museum and Papyrus Collection of Berlin, Germany
    * General online searches for relevant artifacts.

The distribution of image sources is visually represented in Figure 11.

**Annotation Details:** Following image collection and rigorous selection, every instance within the HLA Dataset underwent manual segmentation and annotation using the CVAT platform [26]. Polygonal segmentation masks were created for two primary classes: **“Line”** (representing rows of hieroglyphs) and **“Cartouche”** (oval enclosures containing royal names). An example of these annotations is shown in Figure 12. Individual images within the dataset can contain a significant number of these objects, with some images featuring up to **152 distinct lines or cartouches**. The distribution of the number of objects per image, ranging from 1 to 45, is illustrated in Figure 13.

**Key Statistics:**

* **Total Images:** 883
* **Annotation Classes:** 2 (“Line”, “Cartouche”)
* **Annotation Type:** Polygon Segmentation Masks
* **Maximum Objects per Image:** 152

**Potential Uses:** This dataset is ideal for training and evaluating models for:

* Hieroglyphic line detection and segmentation.
* Cartouche detection and segmentation.
* Layout analysis of hieroglyphic inscriptions on various artifact types.

## B. Signs Segmentation (SS) Dataset

**Overview:** The Signs Segmentation (SS) Dataset comprises **300 images**, each containing a single line of ordered Ancient Egyptian hieroglyphic signs. These images were automatically cropped from segmented lines within the HLA Dataset using our trained layout analysis models. The SS Dataset is specifically designed for the task of segmenting individual hieroglyphic signs within a line of text.

**Data Generation and Annotation:** The lines of hieroglyphs in the HLA Dataset were processed using our trained models to automatically extract individual lines. These cropped line images form the basis of the SS Dataset. Each image in this dataset was then manually annotated using the CVAT platform with polygonal segmentation masks for three distinct classes: **“Left Sign”**, **“Right Sign”**, and **“Dual Sign”** (representing ligatures or signs that visually merge). An example of these annotations is provided in Figure 14.

**Key Statistics:**

* **Total Images:** 300
* **Content:** Single lines of ordered hieroglyphic signs
* **Annotation Classes:** 3 (“Left Sign”, “Right Sign”, “Dual Sign”)
* **Annotation Type:** Polygon Segmentation Masks

**Potential Uses:** This dataset is well-suited for training and evaluating models for:

* Individual hieroglyphic sign segmentation within a line of text.
* Distinguishing between individual and joined signs.

## C. Signs Classification (SC) Dataset

**Overview:** The Signs Classification (SC) Dataset consists of **965 colored images**, representing **115 distinct classes** of individual Ancient Egyptian hieroglyphic signs. These images were automatically cropped from the Signs Segmentation (SS) Dataset using our trained segmentation models. The SC Dataset is designed for the task of classifying individual hieroglyphic signs into their respective categories.

**Data Generation and Annotation:** Individual hieroglyphic signs were automatically extracted from the segmented lines in the SS Dataset using our trained models. This process resulted in the SC Dataset, which includes variations in the appearance of each sign due to different artifact styles and preservation conditions. The dataset is imbalanced, reflecting the natural frequency of different signs in Ancient Egyptian texts, with the distribution of the top 25 classes visualized in Figure 15. The SC Dataset was manually annotated using the Pigeon toolkit [27], with some modifications to suit our specific classification task. Pigeon provided an efficient interface within a Jupyter notebook for the rapid annotation of individual sign images.

**Key Statistics:**

* **Total Images:** 965
* **Number of Classes:** 115 distinct hieroglyphic signs
* **Content:** Individual, colored images of hieroglyphic signs
* **Annotation Tool:** Pigeon toolkit

**Potential Uses:** This dataset is valuable for training and evaluating models for:

* Individual Ancient Egyptian hieroglyphic sign classification.
* Developing robust sign recognition systems that can handle variations in appearance.

This detailed description aims to provide a comprehensive understanding of the datasets we have created. We are committed to making these resources available to the research community to foster further advancements in the study of Ancient Egyptian hieroglyphs. Information regarding data access and licensing will be provided on our project website and the Harvard Dataverse repository.

For more information and access to the datasets, please visit our website: [https://ahmed-g-eltaher.github.io/Hiero_Datasets/](https://ahmed-g-eltaher.github.io/Hiero_Datasets/)
<!-- ...existing content... -->
