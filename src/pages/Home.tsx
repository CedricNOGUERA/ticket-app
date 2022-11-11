import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import '../../src/App.css';

const Home = () => {


    const step = [{
        id: 1,
        name: 'panier'
        },
        {
        id: 2,
        name: 'Coordonnées'
        },
        {
        id: 3,
        name: 'Paiement'
        },
        {
        id: 4,
        name: 'Confirmation'
        }


    ]


  return (
    <Container fluid className="px-0 py-5 bg-light img-blur">
      <Container className=" bg-light shadow">
        <Col className="m-auto " xs={12} md={6} lg={2}>
          <Image fluid src="https://picsum.photos/650/850" alt="description" />
        </Col>
      </Container>
      <Container className="bg-white shadow sticky">
        <Row className="py-2 justify-content-around border-bottom">
          <Col
            className="m-auto text-center pb-2 pb-lg-0"
            xs={12}
            md={6}
            lg={2}
          >
            <b className="fs-4">TAHITI 80</b>
          </Col>
          <Col className="m-auto" xs={12} md={6} lg={2}>
            <Button className="w-100">BIILETERIE</Button>
          </Col>
        </Row>
      </Container>
      <Container className="bg-white border-top shadow pb-5">
        <Row className="justify-content-around">
          <Col className="m-auto" xs={12} md={6} lg={8}>
            <h3 className="mt-3">Description</h3>
            <p>
              L’aube est là et le musicien s’assoupi, seul dans son studio.
              Au-dessus des consoles des images se forment. Il voit des corps
              qui dansent à l’unisson dans un hangar, des adolescents perdus
              dans la musique, le chaos halluciné d’une foule qui bascule dans
              une nouvelle réalité. De ce rêve éveillé nait une chanson. Le
              musicien en perçoit la couleur, les contours, certains accords. Il
              ne faut pas qu’elle lui échappe : s’il s’endort, il l’oubliera,
              s’il ouvre les yeux, elle disparaitra.
            </p>

            <p>
              Le morceau Lost in the Sound qui ouvre en majesté le neuvième
              album de Tahiti 80 parle de cet état hypnagogique, entre l’éveil
              et le sommeil, où l’on dérive en s’abandonnant aux forces
              mystérieuses de l’inspiration. Réalisé à distance du fait de la
              crise sanitaire par Xavier Boyer (chant, guitares), Médéric
              Gontier (guitares), Pedro Resende (basse), Raphael Léger
              (batterie) et Hadrien Grange (claviers) leur neuvième album, Here
              With You, s’est construit, à l’instar de l’esprit des raves de la
              fin des années 80, en suivant une idée directrice : celle de la
              communion par le son.
            </p>
            <p>
              Depuis plus de 20 ans, le spectre unissant les membres de Tahiti
              80 s’étend de la British Invasion du mitan des sixties au soft
              rock du début des eighties, de la sunshine pop à l’école de
              Canterbury, du bubble rock à la disco baléarique, d’Abba à Can en
              passant par 10cc si vous voulez. C’est sur les bancs de la fac de
              Rouen que le groupe se forme au milieu des années 90. La décennie
              écoulée a vu les barrières s’abattre entre le mainstream et
              l’underground, entre la dance music et l’indie rock, grâce
              notamment à la scène de Madchester, et Tahiti 80 va plonger dans
              le grand bain de l’histoire afin de forger sa propre identité.
              Avec son premier album, Puzzle en 1999, le groupe trouve d’emblée
              ses marques à l’étranger. Son succès aux États-Unis et au Japon
              sera constant et les albums qui suivront (Wallpaper for the Soul
              en 2002, Fosbury en 2005, Activity Center en 2008, The Past, The
              Present & The Possible en 2011, Ballroom en 2014, The Sunsh!ne
              Beat vol.1 en 2018, Fear of an Acoustic Planet en 2019)
              affineront, dans leurs variations, un son et un style. Celui d’un
              groupe dont le socle est le songwriting, celui de musiciens qui
              embrasent le passé pour mieux définir le présent, celui d’une
              fratrie qui élargit sans cesse sa palette pour enrichir son
              avenir.
            </p>
            <p>
              Here With You frappe d’emblée par sa cohésion et sa diversité.
              Cohésion d’un son aérien et irradiant. On y croisera forcement les
              fantômes des Beach Boys, de Fleetwood Mac ou de Donald Fagen.
              Diversité des directions empruntées : Vintage Creem nous balade du
              côté de la soul des Jacksons Five, UFO plane au-dessus d’un G-funk
              synthétique et rêveur (Dr Dre et Tangerine Dream se sont
              rencontrés dans un ascenseur ?), Breakfast in L.A. vogue au large
              en compagnie de Christopher Cross et d’Aphex Twin, Hot embrase le
              funk idéal de Chic, Wicked Wicked nous propulse dans la bubble
              factory des Monkeys. Si Here With You a les atours d’un album
              joyeux et insouciant, la mélancolie pointe pourtant dans des
              paroles qui scrutent le jeu des apparences, qui traquent le temps
              qui passe. « Le corps danse et la tête réfléchit » comme le dit si
              bien Xavier Boyer. La fin du voyage s’achève sur Let’s Get
              Started, une manière pour Tahiti 80 de remettre le kilométrage à
              zéro avant un nouveau départ ?
            </p>

            <p>
              + Lemon Rose (première partie) Lemon Rose est né d’aller-retours
              entre Bordeaux et Lisbonne, où Benjamin, chanteur et guitariste, a
              trouvé l’inspiration pour écrire et composer des chansons. Elles
              racontent ses trajets, puisant également dans les relations avec
              sa famille, ses amis et ses rencontres, donnant à sa musique un
              caractère intime. Largement nourri par le Rock et la Pop des
              années 60 à aujourd’hui, les influences musicales de Benjamin sont
              nombreuses. Sur scène, accompagné de ses musiciens, on peut
              trouver des ressemblances avec les Allah-Las, The Black Angels, ou
              encore The Murlocs.
            </p>
            <p>
              Le soleil s’est levé et le musicien s’est éveillé. Dans son studio
              tournoie une poignée de chansons rêvées, mais il n’a pas besoin de
              filet à papillon pour les attraper. Une guitare suffira.
              L’aventure de Here With You peut alors commencer.
            </p>
            <Container>
              <h3 className="mb-5">Billeterie</h3>
              <Row className="w-100" style={{ fontSize: "0.7rem" }}>
                <Col className="text-center">
                  <span className="text-center bg-primary rounded-circle text-white px-2 py-1">
                    1
                  </span>
                  <p className="text-primary py-2">Panier</p>
                </Col>
                <Col className="text-center">
                  <span className="text-center border border-secondary text-secondary rounded-circle px-2 py-1">
                    2
                  </span>
                  <p className="text-secondary  py-2">Coordonnées</p>
                </Col>
                <Col className="text-center">
                  <span className="text-secondary border border-secondary text-secondary rounded-circle text-secondary px-2 py-1">
                    3
                  </span>
                  <p className="text-secondary py-2">Paiement</p>
                </Col>
                <Col className="text-center">
                  <span className="text-secondary border border-secondary text-secondary rounded-circle text-secondary px-2 py-1 ">
                    4
                  </span>
                  <p className="text-secondary py-2">Confirmation</p>
                </Col>
              </Row>
              <div className="border border-danger p-3 text-danger mb-5">
                <b>Cet évèment est fini</b>
              </div>
            </Container>
          </Col>
          <Col className="mx-auto" xs={12} md={6} lg={3}>
            <Card className="my-3 bg-light border-0 ">
              <Card.Body>
                <Card.Title>Calendrier</Card.Title>

                <Card.Text>
                  <Row>
                    <Col className="align-bottom" xs={2}>
                      <Image
                        src="https://img.icons8.com/ios/22/calendar-16.png"
                        alt="icon"
                      />
                    </Col>
                    <Col>
                      <p>8 juin 2022 19:30 à 23:30</p>
                    </Col>
                  </Row>
                </Card.Text>
                <Card.Link href="#" className="text-decoration-none">
                  Ajouter au calendrier
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="my-3 bg-light border-0">
              <Card.Body>
                <Card.Title>Localisation</Card.Title>
                <Card.Text>
                  <Row>
                    <Col className="align-bottom" xs={2}>
                      <Image
                        src="https://img.icons8.com/ios/22/marker.png"
                        alt="icon"
                      />
                    </Col>
                    <Col>
                      <p>
                        IBOAT,
                        <br />
                        QUAI ARMAND LALANDE,
                        <br />
                        N°1 BASSIN À FLÔT,
                        <br />
                        33300, BORDEAUX
                        <br />
                        France
                      </p>
                    </Col>
                  </Row>
                </Card.Text>
                <Card.Link href="#" className="text-decoration-none">
                  Itinéraire
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="my-3 bg-light border-0">
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text>
                  <Row>
                    <Col className="align-bottom" xs={2}>
                      <Image
                        src="https://img.icons8.com/ios/22/gender-neutral-user.png"
                        alt="icon"
                      />
                    </Col>
                    <Col>
                      <p>SARL IBOAT</p>
                    </Col>
                  </Row>
                </Card.Text>
                <Card.Link href="#" className="text-decoration-none">
                  Contacter l'organisation
                </Card.Link>
              </Card.Body>
            </Card>
            <div className="text-center mb-2">
              <b>Partager</b>
            </div>
            <div className="text-center mb-5">
              <Image
                src="https://img.icons8.com/ios/28/facebook-new.png"
                alt="icon"
              />
              <Image
                src="https://img.icons8.com/ios/28/twitter.png"
                alt="icon"
                className="text-primary mx-2"
              />
              <Image
                src="https://img.icons8.com/ios/28/linkedin-circled.png"
                alt="icon"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home