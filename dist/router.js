"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = __importStar(require("./controller"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
const filmRouter = express_1.default.Router();
filmRouter.get('/', controller.getFilms);
filmRouter.get('/:id', controller.getFilmByID);
const languageRouter = express_1.default.Router();
languageRouter.get('/', controller.getLanguages);
languageRouter.get('/:id', controller.getLanguageByID);
const actorRouter = express_1.default.Router();
actorRouter.get('/', controller.getActors);
actorRouter.get('/:id', controller.getActorByID);
const categoryRouter = express_1.default.Router();
categoryRouter.get('/', controller.getCategories);
categoryRouter.get('/:id', controller.getCategoryByID);
const customerRouter = express_1.default.Router();
customerRouter.get('/', controller.getCustomers);
customerRouter.get('/:id', controller.getCustomerByID);
const storeRouter = express_1.default.Router();
storeRouter.get('/', controller.getStores);
storeRouter.get('/:id', controller.getStoreByID);
const staffRouter = express_1.default.Router();
staffRouter.get('/', controller.getStaff);
staffRouter.get('/:id', controller.getStaffByID);
router.get('/', controller.getIndex);
router.use('/films', filmRouter);
router.use('/languages', languageRouter);
router.use('/actors', actorRouter);
router.use('/categories', categoryRouter);
router.use('/customers', customerRouter);
router.use('/stores', storeRouter);
router.use('/staff', staffRouter);
router.get('/mocked', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongod = yield mongodb_memory_server_1.MongoMemoryServer.create();
        const conn = yield mongoose_1.default
            .connect(mongod.getUri(), {})
            .then(() => console.log('MongoDB connected'))
            .catch((err) => console.log(err));
        console.log(mongod.getUri());
        const userSchema = new mongoose_1.default.Schema({
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        });
        const User = mongoose_1.default.model('User', userSchema);
        const newUser = new User({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password123',
        });
        yield newUser
            .save()
            .then(() => console.log('User created'))
            .catch((err) => console.log(err));
        const users = yield User.find();
        console.log(users);
        res.send(users);
    });
});
exports.default = router;
